import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import logsIcon1 from "../components/javascript-editor/logs.svg";
import deleteIcon1 from "../components/javascript-editor/delete.svg";
function JsEditor() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (newCode) => {
    setCode(newCode);
  };

  const loopFunction = (codeString) => {
    let outputText = "";
    const consoleLogWrapper = (input) => {
      outputText += input + "\n";
    };
    const consoleLog = console.log;
    console.log = consoleLogWrapper;
    eval(codeString);
    console.log = consoleLog;
    return outputText;
  };

  const handleRun = () => {
    try {
      const outputText = loopFunction(code);
      setOutput(outputText);
    } catch (error) {
      setOutput(error.toString());
    }
  };

  const handleClear = () => {
    setCode("");
    setOutput("");
  };

  return (
    <div className="JsEditor">
      <div className="editor-container">
        <AceEditor
          mode="javascript"
          theme="monokai"
          height={"300px"}
          width={"700px"}
          showPrintMargin={false}
          onChange={handleChange}
          value={code}
          name="javascript_editor"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
      <div className="controls-container">
      <div style={{ margin: "5px 0px", marginTop:"0px"}}>
                        <Tab
                            className="react-tabs_react-tabs__tab_1ktU_ terminal_tab_8e-XY react-tabs_react-tabs__tab--selected_2o0LJ terminal_is-selected_3neEd"
                            id="react-tabs-10"
                            //  aria-selected="true" aria-disabled="false" aria-controls="react-tabs-11" tabIndex="0"
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
                              <button type="button" onClick={handleRun}>
                              {/* <img draggable={false} src={deleteIcon1} /> */}
                               Run
                             </button>
              
                            <button
                                className="btn-text-right"
                                type="button"
                                onClick={handleClear}
                            >
                                <img draggable={false} src={deleteIcon1} />
                                Delete
                            </button>
                            {/* </div> */}
                        </div>
                    </div>
                    </div>
      <div className="output-container">
        <textarea
          className="output-textarea"
          readOnly
          value={output}
           theme="monokai"
                            rows="7"
                            cols="100"
                            margin={"right"}
                            style={{
                                margin: "3px 0px ",
                                marginRight: "5px",
                                marginLeft: "10px",
                            }}
        ></textarea>
      </div>
    </div>
  );
}

export default JsEditor;
