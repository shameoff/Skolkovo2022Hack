
import Editor from '../editor/Editor'

export default class ChangeFExtentionContr {
    private editor: Editor

    constructor(editor: Editor) {
        this.editor = editor;
    }

    execute(inputFile: string, outputFile: string) {
        this.editor.changeFExtention(inputFile, outputFile);
    } 
}