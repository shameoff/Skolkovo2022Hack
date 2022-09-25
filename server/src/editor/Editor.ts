
import Timeline from 'src/model/Timeline';
import EditorFactory from './EditorFactory';
const editorFactory = new EditorFactory;

export default class Editor {

    reformat(oldFileName: string, newFileName: string, newSize: string) {
        editorFactory.createChangeSizeComp().execute(oldFileName, newFileName, newSize);        
    }

    changeFExtention(oldFileName: string, newFileName: string) {
        editorFactory.createChangeFExtentionComp().execute(oldFileName, newFileName);
    }

    applyLogo(oldFileName: string, newFileName: string, logoFileName: string, coordinates: string) {
        editorFactory.createApplyLogoComp().execute(oldFileName, newFileName, logoFileName, coordinates);
    }

    joinFile(firstFileName: string, secondFileName: string, outputFileName: string) {
        editorFactory.createJoinFileComp().execute(firstFileName, secondFileName, outputFileName);
    }

    cutFile(oldFileName: string, newFileName: string, timelines: Timeline[]) {
        editorFactory.createCutFileComp().execute(oldFileName, newFileName, timelines);
    }

    getFrames(inputFileName: string) {
        editorFactory.createGetFramesComp().execute(inputFileName);
    }

    exit() {
        editorFactory.createExitComp().execute;
    }
}
