
import Editor from '../editor/Editor'

export default class JoinFileContr {
    private editor: Editor

    constructor(editor: Editor) {
        this.editor = editor;
    }

    execute(inputFile: string, secondInputVideo: string, outputFile: string) {
        this.editor.joinFile("test.mp4", "video_test2.mp4", "joinded_video.mp4");
    } 
}