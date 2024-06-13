import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';


import Box from '../box/box.jsx';

// import styles from './classifier-model-modal.css';
const openNewPage = () => {
    // Navi page ni URL ni neeche lakho
    window.open('https://teachablemachine.withgoogle.com/train', '_blank');
  };
const TrainModelEditor = props => (
    <Box className={styles.body}>
        {/* <Box className={classNames(styles.bottomArea)}>
            <Box className={classNames(styles.bottomAreaItem, styles.buttonRow)}>
                <button onClick={props.onExport}>Export Classifier</button>
               
            </Box>
        </Box> */}
         <button onClick={openNewPage}>Click here</button>
    </Box>
);

TrainModelEditor.propTypes = {
    onCancel: PropTypes.func,
    onFileUploader: PropTypes.func,
    onAddLabel: PropTypes.func,
    onExport: PropTypes.func,
    classifierData: PropTypes.object,
    activeLabel: PropTypes.string
};

export default TrainModelEditor;

