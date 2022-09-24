
import { FFmpeg } from "@ffmpeg/ffmpeg";

export default class ChangeFExtentionContr {

    private ffmpeg: FFmpeg
    private fetchFile;
    private fs;

    constructor(ffmpeg: FFmpeg, fetchFile, fs) {
        this.ffmpeg = ffmpeg;
        this.fetchFile = fetchFile;
        this.fs = fs;
    }

    execute(newExt: string) {
        ( async () => {
            await this.ffmpeg.load();
            this.ffmpeg.FS('writeFile', 'test.avi', await this.fetchFile('./test.avi'));
            await this.ffmpeg.run('-i', 'test.avi', 'test.mp4');
            await this.fs.promises.writeFile('./test.mp4', this.ffmpeg.FS('readFile', 'test.mp4'));
            process.exit(0);
        })
    }
}
