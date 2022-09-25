
import Editor from '../editor/Editor'

export default class ReformatContr {
    private editor: Editor

    constructor(editor: Editor) {
        this.editor = editor;
    }

    execute(inputFile: string, outputFile: string, formatParams: string) {
        this.editor.reformat(inputFile, outputFile, formatParams)
    }
}