
import Timeline from 'src/model/Timeline';
import EditorFactory from './EditorFactory';
const editorFactory = new EditorFactory;

export default class Editor {

    reformat(oldFileName: string, newFileName: string, newSize: string, root: string) {
        editorFactory.createChangeSizeComp().execute(oldFileName, newFileName, newSize, root);
    }

    changeFExtention(oldFileName: string, newFileName: string, root: string) {
        editorFactory.createChangeFExtentionComp().execute(oldFileName, newFileName, root);
    }

    applyLogo(oldFileName: string, newFileName: string, logoFileName: string, coordinates: string, root: string) {
        editorFactory.createApplyLogoComp().execute(oldFileName, newFileName, logoFileName, coordinates, root);
    }

    joinFile(firstFileName: string, secondFileName: string, outputFileName: string) {
        editorFactory.createJoinFileComp().execute(firstFileName, secondFileName, outputFileName);
    }

    cutFile(oldFileName: string, newFileName: string, timelines: Timeline[], root: string) {
        editorFactory.createCutFileComp().execute(oldFileName, newFileName, timelines, root);
    }

    exit() {
        editorFactory.createExitComp().execute;
    }
}
