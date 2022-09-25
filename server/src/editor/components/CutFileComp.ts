
import { FFmpeg } from "@ffmpeg/ffmpeg";
import Timeline from "../../model/Timeline";
import path from "path";

export default class CutFileComp {

    private ffmpeg: FFmpeg
    private fetchFile;
    private fs;

    constructor(ffmpeg: FFmpeg, fetchFile, fs) {
        this.ffmpeg = ffmpeg;
        this.fetchFile = fetchFile;
        this.fs = fs;
    }

    execute(oldFileName: string, newFileName: string, timelines: Timeline[], root: string) {
        ( async () => {
            await this.ffmpeg.load();
            this.ffmpeg.FS('writeFile', path.basename(oldFileName), await this.fetchFile(path.join(root, oldFileName)));
            let concat: string = "concat:";
            for(let i = 0; i < timelines.length; i++) {
                await this.ffmpeg.run('-ss', String(timelines[i].start),'-i', path.basename(oldFileName),"-t", String(timelines[i].end), String(i)+".mp4");
                await this.ffmpeg.run('-i', String(i) + ".mp4", '-acodec', 'copy', '-vcodec', 'copy', '-vbsf', 'h264_mp4toannexb', '-f', 'mpegts', String(i) + ".ts");
                concat += String(i) + ".ts";
                if(i<=timelines.length) {
                    concat += "|";
                }
            }
            await this.ffmpeg.run('-i', concat, '-vcodec', 'copy', '-acodec', 'copy', "buff.mp4");
            await this.ffmpeg.run('-i', "buff.mp4", path.basename(newFileName));
            await this.fs.promises.writeFile(path.join(root, newFileName), this.ffmpeg.FS('readFile', "buff.mp4"));
            console.log("Component cut file.");
            process.exit(0);
        })();
    }
}