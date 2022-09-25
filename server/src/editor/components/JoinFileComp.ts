
import { FFmpeg } from "@ffmpeg/ffmpeg";

export default class JoinFileComp {

    private ffmpeg: FFmpeg
    private fetchFile;
    private fs;

    constructor(ffmpeg: FFmpeg, fetchFile, fs) {
        this.ffmpeg = ffmpeg;
        this.fetchFile = fetchFile;
        this.fs = fs;
    }

    execute(firstFileName: string, secondFileName: string, outputFileName: string) {
        ( async () => {
            await this.ffmpeg.load();
            this.ffmpeg.FS('writeFile', firstFileName, await this.fetchFile('./src/input_files/' + firstFileName));
            this.ffmpeg.FS('writeFile', secondFileName, await this.fetchFile('./src/input_files/' + secondFileName));
            let buff1 = "buff1.";
            let buff2 = "buff2.";
            await this.ffmpeg.run('-i', firstFileName, buff1 + "mp4");
            await this.ffmpeg.run('-i', secondFileName, buff2 + "mp4");
            await this.ffmpeg.run('-i', buff1 + "mp4", '-acodec', 'copy', '-vcodec', 'copy', '-vbsf', 'h264_mp4toannexb', '-f', 'mpegts', buff1 + "ts");
            await this.ffmpeg.run('-i', buff2 + "mp4", '-acodec', 'copy', '-vcodec', 'copy', '-vbsf', 'h264_mp4toannexb', '-f', 'mpegts', buff2 + "ts");
            await this.ffmpeg.run('-i', 'concat:' + buff1 + 'ts|' + buff2 + 'ts', '-vcodec', 'copy', '-acodec', 'copy', "buff.mp4");
            await this.ffmpeg.run('-i', "buff.mp4", outputFileName);
            await this.fs.promises.writeFile('./src/output_files/' + outputFileName, this.ffmpeg.FS('readFile', "buff.mp4"));
            console.log("Component joined videos.");
            process.exit(0);
        })();
    }
}