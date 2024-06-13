import PropTypes from 'prop-types';
import React from 'react';

import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';

import TrainModelEditor from './train-model-editor.jsx';

import styles from './classifier-model-modal.css';

const TrainModelModalComponent = props => (
    <Modal
        className={styles.modalContent}
        contentLabel="Train Model"
        headerClassName={styles.header}
        headerImage={props.connectionSmallIconURL}
        id="trainModelModal"
        onHelp={props.onHelp}
        onRequestClose={props.onCancel}
    >
        <Box className={styles.body}>
            <TrainModelEditor 
                onCancel={props.onCancel}
                onFileUploader={props.onFileUploader}
                onAddLabel={props.onAddLabel} 
                onExport={props.onExport}
                classifierData={props.classifierData}
                textData={props.textData}
                activeLabel={props.activeLabel} />
        </Box>
    </Modal>
);

TrainModelModalComponent.propTypes = {
    name: PropTypes.node,
    onCancel: PropTypes.func.isRequired,
    onHelp: PropTypes.func.isRequired,
};

export {
    TrainModelModalComponent as default
};

