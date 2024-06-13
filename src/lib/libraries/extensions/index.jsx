import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import knnalgorithmImage from './knnAlgorithm/knnAlgorithm.png';
import knnalgorithmInsetImage from './knnAlgorithm/knnAlgorithm-small.svg';



import tm2scratchIconURL from './tm2scratch/tm2scratch.png';
import tm2scratchInsetIconURL from './tm2scratch/tm2scratch-small.png';

import facemesh2scratchIconURL from './facemesh2scratch/facemesh2scratch.png';
import facemesh2scratchInsetIconURL from './facemesh2scratch/facemesh2scratch-small.png';

import posenet2scratchIconURL from './posenet2scratch/posenet2scratch.png';
import posenet2scratchInsetIconURL from './posenet2scratch/posenet2scratch-small.png';

import qrcodeIconURL from './qrcode/qrcode.png';
import qrcodeInsetIconURL from './qrcode/qrcode-small.svg';

import ml2scratchIconURL from './ml2scratch/ml2scratch.png';
import ml2scratchInsetIconURL from './ml2scratch/ml2scratch-small.png';

import mlIconURL from './ml/ml.png';
import mlInsetIconURL from './ml/ml-small.png';

import humanbodydetectionImage from './humanbodydetection/humanbodydetection.png';

import objectDetectionImage from './objectdetection/objectdetection.jpg';

import faceDetectionImage from './facedetection/facedetection.jpg';

// import textClassificationBlocksIconURL from './text_classification/text-classification-blocks.jpg';
// import textClassificationBlocksInsetIconURL from './text_classification/text-classification-blocks-small.svg';


// import ev3IconURL from './ev3/ev3.png';
// import ev3InsetIconURL from './ev3/ev3-small.svg';
// import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
// import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

// import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
// import wedo2InsetIconURL from './wedo2/wedo-small.svg';
// import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
// import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
// import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

// import boostIconURL from './boost/boost.png';
// import boostInsetIconURL from './boost/boost-small.svg';
// import boostConnectionIconURL from './boost/boost-illustration.svg';
// import boostConnectionSmallIconURL from './boost/boost-small.svg';
// import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

// import gdxforIconURL from './gdxfor/gdxfor.png';
// import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
// import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
// import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';



import box2dIcon from './box2d/griffpatch_physics.jpg'

import ic2scratchIconURL from './ic2scratch/ic2scratch.png';
import ic2scratchInsetIconURL from './ic2scratch/ic2scratch-small.png';


import speech2textImage from './speech2text/speechtotext.png';

import telloIconURL from './tello/tello.png';
import telloInsetIconURL from './tello/tello-small.png';

import jg3dExtensionIcon from './penguinmod/extensions/3d.png';
import jg3dInsetExtensionIcon from './penguinmod/extensions/3dicon.png';

import aiservicesImage from './ai-services/AI-services.png';
import aiservicesIconURL from './ai-services/AI-services-small.svg';

import nlpImage from './naturallanguageprocessing/NaturalLanguage.png';
import nlpIconURL from './naturallanguageprocessing/NaturalLanguage.png';

export default [
    // {
    //     name: '3D VR',
    //     extensionId: 'jg3dVr',
    //     iconURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsXcntVmSk264zyLaS3GdbOBQPhk3JjE5Vg&usqp=CAU',
    //     tags: ['penguinmod'],
    //     description: "Unfinished PenguinMod Extension.",
    //     collaborator: "PenguinMod",
    //     featured: true
    // },
    // {
    //     name: '3D',
    //     extensionId: 'jg3d',
    //     iconURL: jg3dExtensionIcon,
    //     tags: ['penguinmod'],
    //     customInsetColor: '#B200FF',
    //     insetIconURL: jg3dInsetExtensionIcon,
    //     description: 'Use the magic of 3D to spice up your project.',
    //     collaborator: 'PenguinMod',
    //     featured: true
    // },

    {
        name: 'Artificial Intelligence',
        extensionId: 'AIServicesBlocks',
        collaborator: "my Skill Skool",
        iconURL: aiservicesImage,
        insetIconURL: aiservicesIconURL,
	description: (
            <FormattedMessage
                defaultMessage="Artificial Intelligence"
                description="Speech, Text & Face Recognition"
                id="gui.extension.AIServicesBlocks.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
    
            
    },

    // {
    //     name: "Natural Language Processing",
    //     extensionId: 'naturalLanguageProcessing',
    //     collaborator: 'my Skill Skool',
    //     iconURL: nlpImage,
    //     insetIconURL: nlpIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Natural Language Processing"
    //             description="Create Text Classifiers with NLP"
    //             id="gui.extension.naturalLanguageProcessing.description"
    //         />
    //     ),
    //     featured: true,
    //     disabled: false,
    //     internetConnectionRequired: false
    // },

    {
        name: (
            <FormattedMessage
                defaultMessage="Tello"
                description="Name for the 'Tello' extension"
                id="gui.extension.tello.name"
            />
        ),
        extensionId: 'tello',
        iconURL: telloIconURL,
        insetIconURL: telloInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Tello with Scratch 3.0"
                description="Description for the 'Tello' extension"
                id="gui.extension.tello.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Speech to Text"
                description="Name for the Text to Speech extension"
                id="gui.extension.Scratch3Speech2TextBlocks.name"
            />
        ),
        extensionId: 'Scratch3Speech2TextBlocks',
        collaborator: 'my Skill Skool',
        iconURL: speech2textImage,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.Scratch3Speech2TextBlocks.description"
            />
        ),
        featured: true,
        internetConnectionRequired: false
    },
    {
        name: 'PenguinGPT',
        extensionId: 'https://editor.snail-ide.com/penguingpt.js',
        // extensionId: 'PenguinGPT',
        collaborator: 'cicerorph & Anonymous-cat1',
        iconURL: 'https://rubyteam.tech/cdn/thumbnails/penguingpt.png',
        tags: ['turbowarp', 'ai'],
        description: 'ChatGPT in Snail IDE/PenguinMod has been taken to a whole new level with PenguinGPT. (This replaces the ChatGPT extension and is backwards compatible)',
        featured: true
    },

    {
        name: 'ImageClassifier2Scratch',
        extensionId: 'ic2scratch',
        // collaborator: 'champierre',
        iconURL: ic2scratchIconURL,
        insetIconURL: ic2scratchInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage='Image Classifier Blocks.'
                description='Image Classifier Blocks.'
                id='gui.extension.ic2scratchblocks.description'
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
    // {
    //     name: (
    //         <FormattedMessage
    //             defaultMessage="Text Classification"
    //             description="Text Classification name"
    //             id="gui.extension.text-classification.name"
    //         />
    //     ),
    //     extensionId: 'textClassification',
    //     iconURL: textClassificationBlocksIconURL,
    //     insetIconURL: textClassificationBlocksInsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Create a text classification model for use in a Scratch project!"
    //             description="Text Classification Description"
    //             id="gui.extension.text-classification.description"
    //         />
    //     ),
    //     featured: true
    // },
    // {
    //     name: 'ML',
    //     extensionId: 'ml',
    //     iconURL: mlIconURL,
    //     insetIconURL: mlInsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage='Machine Learning'
    //             description='Classify Image & Pose using TM'
    //             id='gui.extension.mlblocks.description'
    //         />
    //     ),
    //     featured: true,
    //     disabled: false,
    //     internetConnectionRequired: true,
    //     bluetoothRequired: false
    // },

     {
        name: 'ML2Scratch',
        extensionId: 'ml2scratch',
        iconURL: ml2scratchIconURL,
        insetIconURL: ml2scratchInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage='ML2Scratch Blocks.'
                description='ML2Scratch Blocks.'
                id='gui.extension.ml2scratchblocks.description'
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
   
    {
        name: (
            <FormattedMessage
                defaultMessage='QR Code'
                description='Name for the QR Code extension'
                id='gui.extension.qrcodeblocks.name'
            />
        ),
        extensionId: 'qrcode',
        iconURL: qrcodeIconURL,
        insetIconURL: qrcodeInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage='Scan QR Code.{credit_en}'
                description='Description for the QR Code extension'
                values={{
                    credit_en:<div style={{fontSize: '0.6em'}}></div>
                }}
                id='gui.extension.qrcodeblocks.description'
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        translationMap: {
          'ja': {
              'gui.extension.qrcodeblocks.name': 'QRコード',
              'gui.extension.qrcodeblocks.description': 'QRコードを読み取ります。{credit_ja}'
          },
          'ja-Hira': {
              'gui.extension.qrcodeblocks.name': 'QRコード',
              'gui.extension.qrcodeblocks.description': 'QRコードをよみとります。{credit_ja_Hira}'
          }
        }
    },
    {
        name: "Box2D",
        extensionId: 'box2d',
        tags: ["others", "sdks"],
        iconURL: box2dIcon,
        description: (
            <FormattedMessage
                defaultMessage="Box2D"
                description="Scratch utilities"
                id="gui.extension.box2d.description"
            />
        ),
        featured: true,
        collaborator: 'griffpatch',
        incompatibleWithScratch: true
    },

    {
        name: 'Face Detection',
        extensionId: 'faceDetection',
        // collaborator: "My Skill Skool",
        iconURL: faceDetectionImage,
	description: (
            <FormattedMessage
                defaultMessage="Detect & recognize human face"
                description="Detect & recognize human face"
                id="gui.extension.faceDetection.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
    
            
    },
    {
        name: 'Object Detection',
        extensionId: 'objectDetection',
        // collaborator: "My Skill Skool",
        iconURL: objectDetectionImage,
	description: (
            <FormattedMessage
                defaultMessage="Object Detection"
                description="Identify objects from image"
                id="gui.extension.objectDetection.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
    
            
    },
    {
        name: 'Human Body Detection',
        extensionId: 'posenet',
        // collaborator: "my Skill Skool",
        iconURL: humanbodydetectionImage,
	description: (
            <FormattedMessage
                defaultMessage="Human Body Detection"
                description="Identify human parts from image"
                id="gui.extension.posenet.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
    
            
    },
    {
        name: 'Posenet',
        extensionId: 'posenet2scratch',
        iconURL: posenet2scratchIconURL,
        insetIconURL: posenet2scratchInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage='PoseNet Blocks.'
                description='PoseNet Blocks.'
                id='gui.extension.posenet2scratchblocks.description'
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
  
  
    {
        name: 'Facemesh',
        extensionId: 'facemesh2scratch',
        iconURL: facemesh2scratchIconURL,
        insetIconURL: facemesh2scratchInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage='Face Tracking'
                description='Face Tracking'
                id='gui.extension.facemesh2scratch.description'
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
    
    {
        name: 'Teachable Machine',
        extensionId: 'tm2scratch',
        iconURL: tm2scratchIconURL,
        insetIconURL: tm2scratchInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage='Machine Learning Model'
                id='gui.extension.tm2scratchblocks.description'
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        translationMap: {
            'en': {
                'gui.extension.tm2scratchblocks.description': 'Recognize your own images and sounds.'
            },
            
        }
    },


    {
               name: (
                   <FormattedMessage
                       defaultMessage="knn algorithm"
                       description="Name for the 'knn algorithm' extension"
                       id="gui.extension.ddgorithm.name"
                   />
               ),
               extensionId: 'knnAlgorithm',
               iconURL: knnalgorithmImage,
               insetIconURL: knnalgorithmInsetImage,
               description: (
                   <FormattedMessage
                       defaultMessage="knn algorithm."
                       description="Description for the 'knn algorithm' extension"
                       id="gui.extension.knnalgorithm.description"
                   />
               ),
               featured: true
           },

      {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    // {
    //     // name: 'Speech2Scratch',
    //     name: ( 
    //         <FormattedMessage
    //         defaultMessage='Speech2Scratch'
    //         description='Name for the Speech2scratch Extension '
    //         id='gui.extension.speech2sctatch.name'
    //         />
    //     ),
    //     extensionId: 'speech2scratch',
    //     // extensionURL: 'https://champierre.github.io/speech2scratch/speech2scratch.mjs',
    //     // collaborator: 'champierre',
    //     iconURL: speech2scratchIconURL,
    //     insetIconURL: speech2scratchInsetIconURL,
     
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Speech2Scratch Blocks."
    //             description="Description for Speech2Scratch Blocks."
    //             id="gui.extension.speech2scratch.description"
    //         />
    //     ),
    //     featured: true,
    //     disabled: false,
    //     bluetoothRequired: false,
    //     internetConnectionRequired: true,
    //     helpLink: 'https://github.com/champierre/speech2scratch/',
    //     translationMap: {
    //         'ja': {
    //             'gui.extension.speech2scratch.description': '音声を認識してテキストに変換する。'
    //         },
    //         'ja-Hira': {
    //             'gui.extension.speech2scratch.description': 'おんせいをにんしきしてテキストにへんかんする。'
    //         }
    //     }
    // },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Makey Makey"
                description="Name for the Makey Makey extension"
                id="gui.extension.makeymakey.name"
            />
        ),
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    }
    // {
    //     name: 'LEGO MINDSTORMS EV3',
    //     extensionId: 'ev3',
    //     collaborator: 'LEGO',
    //     iconURL: ev3IconURL,
    //     insetIconURL: ev3InsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Build interactive robots and more."
    //             description="Description for the 'LEGO MINDSTORMS EV3' extension"
    //             id="gui.extension.ev3.description"
    //         />
    //     ),
    //     featured: true,
    //     disabled: false,
    //     bluetoothRequired: true,
    //     internetConnectionRequired: true,
    //     launchPeripheralConnectionFlow: true,
    //     useAutoScan: false,
    //     connectionIconURL: ev3ConnectionIconURL,
    //     connectionSmallIconURL: ev3ConnectionSmallIconURL,
    //     connectingMessage: (
    //         <FormattedMessage
    //             defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
    //             description="Message to help people connect to their EV3. Must note the PIN should be 1234."
    //             id="gui.extension.ev3.connectingMessage"
    //         />
    //     ),
    //     helpLink: 'https://scratch.mit.edu/ev3'
    // },
    // {
    //     name: 'LEGO BOOST',
    //     extensionId: 'boost',
    //     collaborator: 'LEGO',
    //     iconURL: boostIconURL,
    //     insetIconURL: boostInsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Bring robotic creations to life."
    //             description="Description for the 'LEGO BOOST' extension"
    //             id="gui.extension.boost.description"
    //         />
    //     ),
    //     featured: true,
    //     disabled: false,
    //     bluetoothRequired: true,
    //     internetConnectionRequired: true,
    //     launchPeripheralConnectionFlow: true,
    //     useAutoScan: true,
    //     connectionIconURL: boostConnectionIconURL,
    //     connectionSmallIconURL: boostConnectionSmallIconURL,
    //     connectionTipIconURL: boostConnectionTipIconURL,
    //     connectingMessage: (
    //         <FormattedMessage
    //             defaultMessage="Connecting"
    //             description="Message to help people connect to their BOOST."
    //             id="gui.extension.boost.connectingMessage"
    //         />
    //     ),
    //     helpLink: 'https://scratch.mit.edu/boost'
    // },
    // {
    //     name: 'LEGO Education WeDo 2.0',
    //     extensionId: 'wedo2',
    //     collaborator: 'LEGO',
    //     iconURL: wedo2IconURL,
    //     insetIconURL: wedo2InsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Build with motors and sensors."
    //             description="Description for the 'LEGO WeDo 2.0' extension"
    //             id="gui.extension.wedo2.description"
    //         />
    //     ),
    //     featured: true,
    //     disabled: false,
    //     bluetoothRequired: true,
    //     internetConnectionRequired: true,
    //     launchPeripheralConnectionFlow: true,
    //     useAutoScan: true,
    //     connectionIconURL: wedo2ConnectionIconURL,
    //     connectionSmallIconURL: wedo2ConnectionSmallIconURL,
    //     connectionTipIconURL: wedo2ConnectionTipIconURL,
    //     connectingMessage: (
    //         <FormattedMessage
    //             defaultMessage="Connecting"
    //             description="Message to help people connect to their WeDo."
    //             id="gui.extension.wedo2.connectingMessage"
    //         />
    //     ),
    //     helpLink: 'https://scratch.mit.edu/wedo'
    // },
    // {
    //     name: 'Go Direct Force & Acceleration',
    //     extensionId: 'gdxfor',
    //     collaborator: 'Vernier',
    //     iconURL: gdxforIconURL,
    //     insetIconURL: gdxforInsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Sense push, pull, motion, and spin."
    //             description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
    //             id="gui.extension.gdxfor.description"
    //         />
    //     ),
    //     featured: true,
    //     disabled: false,
    //     bluetoothRequired: true,
    //     internetConnectionRequired: true,
    //     launchPeripheralConnectionFlow: true,
    //     useAutoScan: false,
    //     connectionIconURL: gdxforConnectionIconURL,
    //     connectionSmallIconURL: gdxforConnectionSmallIconURL,
    //     connectingMessage: (
    //         <FormattedMessage
    //             defaultMessage="Connecting"
    //             description="Message to help people connect to their force and acceleration sensor."
    //             id="gui.extension.gdxfor.connectingMessage"
    //         />
    //     ),
    //     helpLink: 'https://scratch.mit.edu/vernier'
    // }
];

