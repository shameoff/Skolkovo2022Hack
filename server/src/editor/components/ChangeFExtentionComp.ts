
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

    execute(oldFileName: string, newFileName: string) {
        ( async () => {
            await this.ffmpeg.load();
            this.ffmpeg.FS('writeFile', oldFileName, await this.fetchFile('./src/input_files/' + oldFileName));
            await this.ffmpeg.run('-i', oldFileName, newFileName);
            await this.fs.promises.writeFile('./src/output_files/' + newFileName, this.ffmpeg.FS('readFile', newFileName));
            console.log("Component changed extention.");
            process.exit(0);
        })();
    }
}
