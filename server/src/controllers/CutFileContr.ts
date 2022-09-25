
import Timeline from '../model/Timeline';
import Editor from '../editor/Editor'

export default class CutFileContr {
    private editor: Editor

    constructor(editor: Editor) {
        this.editor = editor;
    }

    execute() {
        let timelines = [new Timeline(0, 10), new Timeline(20, 30), new Timeline(40, 50)]
        this.editor.cutFile("test.mp4", "cut_video.avi", timelines)
    } 
}