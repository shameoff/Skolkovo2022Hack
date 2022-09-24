
import Editor from '../editor/Editor'

export default class ChangeFExtentionContr {
    private editor: Editor

    constructor(editor: Editor) {
        this.editor = editor;
    }

    execute(newExt: string) {
        this.editor.changeFExtention(newExt)
    } 
}