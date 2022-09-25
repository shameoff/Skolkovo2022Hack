
import Timeline from '../model/Timeline';
import Editor from '../editor/Editor'

export default class CutFileContr {
    private editor: Editor

    constructor(editor: Editor) {
        this.editor = editor;
    }

    execute(inputFile: string, outputFile: string, timelines: Timeline[] ) {
        this.editor.cutFile(inputFile, outputFile, timelines)
    } 
}