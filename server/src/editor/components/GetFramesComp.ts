
import { FFmpeg } from "@ffmpeg/ffmpeg";

export default class GetFrames {

    private ffmpeg: FFmpeg
    private fetchFile;
    private fs;

    constructor(ffmpeg: FFmpeg, fetchFile, fs) {
        this.ffmpeg = ffmpeg;
        this.fetchFile = fetchFile;
        this.fs = fs;
    }


    // ffmpeg -i test.mp4 -r 1 -f image2 images/images%05d.png
    execute(inputFileName: string) {
        ( async () => {
            await this.ffmpeg.load();
            this.ffmpeg.FS('writeFile', inputFileName, await this.fetchFile('./src/input_files/' + inputFileName));
            let str = "images%05d.png"
            await this.ffmpeg.run('-i', inputFileName, "-r", "1", "-f", "image2", str);
            console.log("==================================================");
            await this.fs.promises.writeFile('./src/output_files/images' + str, this.ffmpeg.FS('readFile', str));
            console.log("Component got frames.");
            process.exit(0);
        })();
    }
}