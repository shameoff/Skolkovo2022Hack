
import { FFmpeg } from "@ffmpeg/ffmpeg";

export default class ChangeSizeComp {

    private ffmpeg: FFmpeg
    private fetchFile;
    private fs;

    constructor(ffmpeg: FFmpeg, fetchFile, fs) {
        this.ffmpeg = ffmpeg;
        this.fetchFile = fetchFile;
        this.fs = fs;
    }


    execute(newSize: string) {
        ( async () => {
            this.ffmpeg.exit();
            console.log("Component exited from ffmpeg.");
            process.exit(0);
        })();
    }
}