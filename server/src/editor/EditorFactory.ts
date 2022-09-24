
const fs = require('fs');
const { createFFmpeg, fetchFile } = require('@ffmpeg/ffmpeg');
const ffmpeg = createFFmpeg({ log: true });

import ChangeSizeComp from './components/ChangeSizeComp';
import ChangeFExtentionConmp from './components/ChangeFExtentionComp';
import ExitComp from "./components/ExitComp";

export default class EditorFactory {

    createChangeSizeComp(): ChangeSizeComp {
        return new ChangeSizeComp(ffmpeg, fetchFile, fs);
    }

    createChangeFExtentionComp(): ChangeFExtentionConmp {
        return new ChangeFExtentionConmp(ffmpeg, fetchFile, fs);
    }

    createExitComp(): ExitComp {
        return new ExitComp(ffmpeg, fetchFile, fs);
    }
}
