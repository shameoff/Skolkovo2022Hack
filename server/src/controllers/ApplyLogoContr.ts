
import Editor from '../editor/Editor'

export default class ApplyLogoContr {
    private editor: Editor

    constructor(editor: Editor) {
        this.editor = editor;
    }

    execute() {
        this.editor.applyLogo("test.mp4", "video_with_logo.mp4", "main_background.jpg", "50:30");
    } 
}