
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
            this.ffmpeg.FS('writeFile', 'video_test.mp4', await this.fetchFile('./src/input_files/video_test.mp4'));
            await this.ffmpeg.run('-i', 'video_test.mp4', 'test.avi');
            await this.fs.promises.writeFile('./src/output_files/test.avi', this.ffmpeg.FS('readFile', 'test.avi'));
            process.exit(0);
        })();
    }
}
