
import Editor from '../editor/Editor'

export default class ChangeFExtentionContr {
    private editor: Editor

    constructor(editor: Editor) {
        this.editor = editor;
    }

    execute() {
        this.editor.reformat("test.mp4", "reformated_video.mp4", "1980:1080")
    }
}