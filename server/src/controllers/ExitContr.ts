
import Editor from '../editor/Editor'

export default class ExitContr {
    private editor: Editor

    constructor(editor: Editor) {
        this.editor = editor;
    }

    execute() {
        this.editor.exit()
    } 
}