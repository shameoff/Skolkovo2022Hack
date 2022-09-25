
import { FFmpeg } from "@ffmpeg/ffmpeg";
import path from "path";

export default class ApplyLogo {

    private ffmpeg: FFmpeg
    private fetchFile;
    private fs;

    constructor(ffmpeg: FFmpeg, fetchFile, fs) {
        this.ffmpeg = ffmpeg;
        this.fetchFile = fetchFile;
        this.fs = fs;
    }

    execute(oldFileName: string, newFileName: string, logoFileName: string, coordinates: string, root: string) {
        ( async () => {
            if (!this.ffmpeg.isLoaded()) {
                await this.ffmpeg.load();
            }
            this.ffmpeg.FS('writeFile', path.basename(oldFileName), await this.fetchFile(path.join(root, oldFileName)));
            this.ffmpeg.FS('writeFile', path.basename(logoFileName), await this.fetchFile(path.join(root, logoFileName)));
            let buff = '[0:v][1:v]overlay=' + coordinates
            console.log(buff);
            await this.ffmpeg.run('-i', path.basename(oldFileName), '-i', path.basename(logoFileName), '-filter_complex', buff, path.basename(newFileName));
            await this.fs.promises.writeFile(path.join(root, newFileName), this.ffmpeg.FS('readFile', path.basename(newFileName)));
            console.log("Component applied logo.");
        })();
    }
}