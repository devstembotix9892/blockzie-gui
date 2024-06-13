import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import { IonButton, IonButtons, useIonLoading, IonIcon } from '@ionic/react';
import { playCircle } from 'ionicons/icons';
import { ReactReplView } from 'awesome-react-repl';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/snippets/python';
import 'ace-builds/src-noconflict/theme-nord_dark';
import 'ace-builds/src-noconflict/ext-language_tools';
import { loadPyodide } from 'pyodide';
import { Tab } from 'react-tabs';
import logsIcon1 from './logs.svg';
import deleteIcon1 from './delete.svg';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
// import * as Comlink from 'comlink';

const PythonEditor = () => {
  const [codeInput, setCodeInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isPyodideLoaded, setIsPyodideLoaded] = useState(false);
  const [presentLoading] = useIonLoading();
  const [outputArray, setOutputArray] = useState([{ type: '', value: '' }]);
  const [pyodide, setPyodide] = useState(null);

  useEffect(() => {
    const loadPythonInReact = async () => {
      if (!isLoading) {
        setIsLoading(true);
        return;
      }

      if (!isPyodideLoaded) {
        presentLoading('Loading... Pyodide', 2000, 'crescent');

        const pyodideInstance = await loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/',
          stdin: window.prompt,
          stdout: (text) => {
            let data = { type: 'output', value: text.toString() };
            setOutputArray((outputArray) => [...outputArray, data]);
          },
          stderr: (text) => {
            let data = { type: 'error', value: text.toString() };
            setOutputArray((outputArray) => [...outputArray, data]);
          },
        });

        // Load additional packages
        await pyodideInstance.loadPackage('numpy');
        await pyodideInstance.loadPackage('pandas');
        await pyodideInstance.loadPackage('micropip');
        await pyodideInstance.loadPackage('opencv-python');
        await pyodideInstance.loadPackage('matplotlib');

        setPyodide(pyodideInstance);
        setIsPyodideLoaded(true);
      }
    };

    loadPythonInReact();
  }, [isLoading, isPyodideLoaded, presentLoading]);

  const runPyCode = async () => {
    if (!pyodide) {
      console.error('Pyodide is not loaded yet.');
      return;
    }
    if (!codeInput.trim()) {
      console.error('Code input is empty.');
      return;
    }
    pyodide.runPython(codeInput);
  };

  async function termAction(action, e) {
    if (action === "onClear") {
      setOutputArray([{ type: "", value: "" }]);
    }

    if (action === "onSubmit") {
      if (e === "clear" || e === "clear()") {
        setOutputArray([{ type: "", value: "" }]);
        return;
      }

      if (e === "" || e === undefined || e === null) {
        return;
      }

      let data = { type: "input".toString(), value: e.toString() };
      setOutputArray((outputArray) => [...outputArray, data]);

      if (!pyodide) {
        console.error('Pyodide is not loaded yet.');
        return;
      }

      let namespace = pyodide.globals.get("dict")();
      pyodide.runPython(
        `
          import sys
          from pyodide.ffi import to_js
          from pyodide.console import PyodideConsole, repr_shorten, BANNER
          import _main_
          BANNER = "Welcome to the Pyodide terminal emulator 🐍\\n" + BANNER
          pyconsole = PyodideConsole(_main.dict_)
          import builtins
          async def await_fut(fut):
            res = await fut
            if res is not None:
              builtins._ = res
            return to_js([res], depth=1)
          def clear_console():
            pyconsole.buffer = []
        `,
        { globals: namespace }
      );

      let repr_shorten = namespace.get("repr_shorten");
      let banner = namespace.get("BANNER");
      let await_fut = namespace.get("await_fut");
      let pyconsole = namespace.get("pyconsole");
      let clear_console = namespace.get("clear_console");

      pyconsole.stdout_callback = (s) => {
        let data = { type: "output".toString(), value: s.toString() };
        setOutputArray((outputArray) => [...outputArray, data]);
      };

      pyconsole.stderr_callback = (s) => {
        let data = { type: "error".toString(), value: s.toString() };
        setOutputArray((outputArray) => [...outputArray, data]);
      };

      try {
        await pyodideInterpreter(e, await_fut, pyconsole);
      } catch (e) {
        console.log(e)
      }
    }
  }

  const pyodideInterpreter = async (command, await_fut, pyconsole) => {
    for (const c of command.split('\n')) {
      let fut = pyconsole.push(c);

      switch (fut.syntax_check) {
        case 'syntax-error':
          let data = { type: 'error', value: fut.formatted_error.trimEnd() };
          setOutputArray((outputArray) => [...outputArray, data]);
          continue;
        case 'incomplete':
          continue;
        case 'complete':
          break;
        default:
          throw new Error('Unexpected type');
      }

      let wrapped = await_fut(fut);
      try {
        let [value] = await wrapped;
        if (value !== undefined) {
          let data = { type: 'output', value: value };
          setOutputArray((outputArray) => [...outputArray, data]);
        }
        if (pyodide.isPyProxy(value)) {
          value.destroy();
        }
      } catch (e) {
        if (e.constructor.name === 'PythonError') {
          const message = fut.formatted_error || e.message;
          let data = { type: 'error', value: message.trimEnd() };
          setOutputArray((outputArray) => [...outputArray, data]);
        } else {
          throw e;
        }
      } finally {
        fut.destroy();
        wrapped.destroy();
      }
    }
  };

  return (
    <div id="python-editor-container" style={{ display: 'block', height: '100%', width: '100%' }}>
      {/* <Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/comlink@4.4.1/dist/umd/comlink.js"
          // src="https://unpkg.com/comlink/dist/umd/comlink.js"
        />
      </Helmet> */}

      <AceEditor
        onChange={(e) => {
          setCodeInput(e)
        }}
        style={{ width: "100%" }}
        placeholder=""
        mode="python"
        name="code_editor"
        height='400px'
        fontSize={18}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={codeInput}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }} />

      <div id="python-editor-output">
        <Tab
          className="react-tabs_react-tabs_tab_1ktU terminal_tab_8e-XY react-tabs_react-tabs__tab--selected_2o0LJ terminal_is-selected_3neEd"
          id="react-tabs-10"
        >
          <img draggable={false} src={logsIcon1} />
          Logs
        </Tab>
        <div
          style={{
            float: "right",
            margin: "5px 0px",
            marginRight: "5px",
          }}
        >
          <IonButtons slot='end'>
            <IonButton onClick={runPyCode}>
              <IonIcon color='success' icon={playCircle} />
            </IonButton>
          </IonButtons>
          <button
            className="btn-text-right"
            type="button"
            onClick={() => termAction("onClear")}
          >
            <img draggable={false} src={deleteIcon1} />
            Delete
          </button>
        </div>
        <ReactReplView
          // height={window.innerHeight - 110}
          height='200px'
          title={``}
          tabs={[]}
          onChangeTab={(e) => termAction("onChangeTab", e)}
          onSubmit={(e) => termAction("onSubmit", e)}
          onClear={() => termAction("onClear")}
          lines={outputArray}
        />
      </div>
    </div>
  );
};

export default PythonEditor;