
import EditorFactory from './EditorFactory';
const editorFactory = new EditorFactory;

export default class Editor {

    changeSize(newSize: string) {
        editorFactory.createChangeSizeComp().execute(newSize);        
    }

    changeFExtention(newExt: string) {
        editorFactory.createChangeFExtentionComp().execute(newExt);
    }

    exit() {
        editorFactory.createExitComp().execute;
    }
}
