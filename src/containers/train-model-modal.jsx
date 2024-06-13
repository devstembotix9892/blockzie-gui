import PropTypes from 'prop-types';
import React from 'react';
import bindAll from 'lodash.bindall';
import TrainModelmodalComponent from '../components/train-model/train-model-modal.jsx';
import VM from 'blockzie-vm';
import {connect} from 'react-redux';
import {closeClassifierModelModal} from '../reducers/modals';
import {handleFileUpload} from '../lib/file-uploader.js';
import {showStandardAlert} from '../reducers/alerts';



class TrainModelmodal extends React.Component {
    constructor (props) {
        console.log("Train Model Modal");
        super(props);
        bindAll(this, [
            // 'handleAddLabel',
            // 'handleCancel',
            // 'handleHelp',
            // 'handleFileUploader',
            // 'handleFileExport'
        ]);
        this.state = {
            trainData: props.vm.runtime.modelData.trainData,  //when the modal opens, get the model data and the next label number from the vm runtime
            // nextLabelNumber: props.vm.runtime.modelData.nextLabelNumber,
            //classifiedData: props.vm.runtime.this.classifier.getClassifierDataset(),
            // activeLabel: ""   //used by the label and example editors to keep track of the label currently being viewed/edited
        };
    }
    // handleAddLabel () { //when a new label is first created, create a new active label and change to the example editor
    //     console.log("Text Model Modal: add a label");
    //     // Make a new label
    //     let newLabelName = "Class " + this.state.nextLabelNumber;
    //     this.props.vm.runtime.emit('NEW_LABEL', newLabelName);
    //     this.props.vm.runtime.modelData.nextLabelNumber++;
    //     this.setState({
    //         nextLabelNumber: this.props.vm.runtime.modelData.nextLabelNumber,
    //         activeLabel: newLabelName
    //     });
    // }
    // handleCancel () {   //when modal closed, store the next label number in the runtime for later, then call props.onCancel() to close the modal
    //     console.log("Text Model Modal: handle cancel")
    //     //this.props.vm.runtime.emit('LOAD_CLASSIFIER', classifiedData);
    //     this.setState({
    //         activeLabel: ""
    //     });
    //     this.props.vm.runtime.emit('LOAD_CLASSIFIER');
    //     this.props.onCancel();
    // }
    // handleHelp () { //TODO?
    //     console.log("Text Model Modal: Help requested");
    //     //window.open(link, '_blank');
    // }
    // handleFileUploader (input) {
    //     console.log("Text Model Modal: Handle File upload");
    // }
    // handleFileExport () {
    //     console.log("Text Model Modal: Handle File export");
    //     this.props.vm.runtime.emit('EXPORT_CLASSIFIER');
    // }
    render () {
        return (
            <TrainModelmodalComponent
            vm={this.props.vm}
            // onCancel={this.handleCancel}
            // onFileUploader={this.handleFileUploader}
            // onHelp={this.handleHelp}
            onTrainModel={this.handleTrainModel}
            // onAddLabel={this.handleAddLabel}
            // onExport={this.handleFileExport}
            // textData={this.state.textData}
            // classifierData={this.props.vm.runtime.modelData.classifierData}
            // activeLabel={this.state.activeLabel}
            />
            
        );
    }
}

TrainModelmodal.propTypes = {
    onCancel: PropTypes.func.isRequired,
    vm: PropTypes.instanceOf(VM).isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    onCancel: () => {
        dispatch(closeTrainModelmodal());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrainModelmodal);

