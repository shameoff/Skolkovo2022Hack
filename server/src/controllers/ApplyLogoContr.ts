
import Editor from '../editor/Editor'

export default class ApplyLogoContr {
    private editor: Editor

    constructor(editor: Editor) {
        this.editor = editor;
    }

    execute(inputFile: string, outputFile: string, logoFile: string, coordinates: string, root: string) {
        this.editor.applyLogo(inputFile, outputFile, logoFile, coordinates, root);
    } 
}