
import { FFmpeg } from "@ffmpeg/ffmpeg";

export default class ReformatComp {

    private ffmpeg: FFmpeg
    private fetchFile;
    private fs;

    constructor(ffmpeg: FFmpeg, fetchFile, fs) {
        this.ffmpeg = ffmpeg;
        this.fetchFile = fetchFile;
        this.fs = fs;
    }


    execute(oldFileName: string, newFileName: string, newSize: string) {
        ( async () => {
            await this.ffmpeg.load();
            this.ffmpeg.FS('writeFile', oldFileName, await this.fetchFile('./src/input_files/' + oldFileName));
            await this.ffmpeg.run('-i', oldFileName, "-s", newSize, newFileName);
            await this.fs.promises.writeFile('./src/output_files/' + newFileName, this.ffmpeg.FS('readFile', newFileName));
            console.log("Component reformated file.");
            process.exit(0);
        })();
    }
}
