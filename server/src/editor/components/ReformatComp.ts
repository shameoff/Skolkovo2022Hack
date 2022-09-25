
import { FFmpeg } from "@ffmpeg/ffmpeg";
import path from "path";

export default class ReformatComp {

    private ffmpeg: FFmpeg
    private fetchFile;
    private fs;

    constructor(ffmpeg: FFmpeg, fetchFile, fs) {
        this.ffmpeg = ffmpeg;
        this.fetchFile = fetchFile;
        this.fs = fs;
    }


    execute(oldFileName: string, newFileName: string, newSize: string, root: string) {
        ( async () => {
            await this.ffmpeg.load();
            this.ffmpeg.FS('writeFile', path.basename(oldFileName), await this.fetchFile(path.join(root, oldFileName)));
            await this.ffmpeg.run('-i', path.basename(oldFileName), "-s", newSize, path.basename(newFileName));
            await this.fs.promises.writeFile(path.join(root, newFileName), this.ffmpeg.FS('readFile', path.basename(newFileName)));
            console.log("Component reformated file.");
            process.exit(0);
        })();
    }
}
