
import { FFmpeg } from "@ffmpeg/ffmpeg";

export default class ApplyLogo {

    private ffmpeg: FFmpeg
    private fetchFile;
    private fs;

    constructor(ffmpeg: FFmpeg, fetchFile, fs) {
        this.ffmpeg = ffmpeg;
        this.fetchFile = fetchFile;
        this.fs = fs;
    }

    execute(oldFileName: string, newFileName: string, logoFileName: string, coordinates: string ) {
        ( async () => {
            await this.ffmpeg.load();
            this.ffmpeg.FS('writeFile', oldFileName, await this.fetchFile('./src/input_files/' + oldFileName));
            this.ffmpeg.FS('writeFile', logoFileName, await this.fetchFile('./src/input_files/' + logoFileName));
            let buff = '[0:v][1:v]overlay=' + coordinates
            console.log(buff);
            await this.ffmpeg.run('-i', oldFileName, '-i', logoFileName, '-filter_complex', buff, newFileName);
            await this.fs.promises.writeFile('./src/output_files/' + newFileName, this.ffmpeg.FS('readFile', newFileName));
            console.log("Component applied logo.");
            process.exit(0);
        })();
    }
}