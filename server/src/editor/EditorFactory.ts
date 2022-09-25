
const fs = require('fs');
const { createFFmpeg, fetchFile } = require('@ffmpeg/ffmpeg');
const ffmpeg = createFFmpeg({ log: true });

import ReformatComp from './components/ReformatComp';
import ChangeFExtentionConmp from './components/ChangeFExtentionComp';
import ExitComp from "./components/ExitComp";
import ApplyLogoComp from './components/ApplyLogoComp';
import CutFileComp from './components/CutFileComp';
import JoinFileComp from './components/JoinFileComp';

export default class EditorFactory {

    createChangeSizeComp(): ReformatComp {
        return new ReformatComp(ffmpeg, fetchFile, fs);
    }

    createChangeFExtentionComp(): ChangeFExtentionConmp {
        return new ChangeFExtentionConmp(ffmpeg, fetchFile, fs);
    }

    createApplyLogoComp(): ApplyLogoComp {
        return new ApplyLogoComp(ffmpeg, fetchFile, fs);
    }

    createJoinFileComp(): JoinFileComp {
        return new JoinFileComp(ffmpeg, fetchFile, fs);
    }

    createCutFileComp(): CutFileComp {
        return new CutFileComp(ffmpeg, fetchFile, fs);
    }

    createExitComp(): ExitComp {
        return new ExitComp(ffmpeg, fetchFile, fs);
    }
}
