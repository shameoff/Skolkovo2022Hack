// @ts-nocheck
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import multer from "multer";
import path from "path";
import ApplyLogoContr from "./controllers/ApplyLogoContr";
import ChangeFExtentionContr from "./controllers/ChangeFExtentionContr";
import CutFileContr from "./controllers/CutFileContr";
import ExitContr from "./controllers/ExitContr";
import JoinFileContr from "./controllers/JoinFileContr";
import ReformatContr from "./controllers/ReformatContr";
import Editor from "./editor/Editor";
import Timeline from "./model/Timeline";

const upload = multer();
const editor = new Editor()

const changeFExtentionContr = new ChangeFExtentionContr(editor);
const applyLogoContr = new ApplyLogoContr(editor);
const reformatContr = new ReformatContr(editor);
const exitContr = new ExitContr(editor);
const cutFileContr = new CutFileContr(editor);
const joinFileContr = new JoinFileContr(editor);

let outputFileName = "";
let defaultFileExtension = "";
let inputFileName: string = "";
let inputPhotoName = "";

dotenv.config({path: "../.env"});
const app = express();
const port = process.env.EXPRESS_PORT;

app.options("*", cors());
app.use(cors());

app.get("/", (request, response) => {
    return response.sendFile(path.join(__dirname, "./../index.html"));
});

app.post("/video", upload.any(), (request, response) => {
    console.log(request.body);
    console.log(request.files);
    const files = request.files;
    for (let i = 0; i < files.length; i += 1) {
        let fileName = files[i].originalname;
        let index = fileName.lastIndexOf('.');
        let fileExtencion: string = fileName.substr(index, fileName.length);
        defaultFileExtension = fileExtencion
        console.log(fileExtencion);
        let dir = path.join(__dirname, "input_files/")
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {recursive: true})
        }
        dir = path.join(__dirname, "output_files/")
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {recursive: true})
        }
        outputFileName = "output_files/output_video";
        inputFileName = "input_files/input_video" + fileExtencion;
        fs.writeFileSync(path.join(__dirname, inputFileName), files[i].buffer);
    }
    return response.sendStatus(200);
});

app.post("/photo", upload.any(), (request, response) => {
    console.log(request.body);
    console.log(request.files);
    const files = request.files;
    for (let i = 0; i < files.length; i += 1) {
        let fileName = files[i].originalname;
        let index = fileName.lastIndexOf('.');
        let fileExtencion = fileName.substr(index, fileName.length);
        console.log(fileExtencion);
        let dir = path.join(__dirname, "input_files/")
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {recursive: true})
        }
        inputFileName = "./input_files/input_photo" + fileExtencion

        fs.writeFileSync(path.join(__dirname, inputFileName), files[i].buffer);
    }
    return response.sendStatus(200);
});

try {
    let dir = path.join(__dirname, "input_files/")
    if (fs.existsSync(dir)) {
        inputFileName = "/input_files/input_video.mp4"
        outputFileName = "/output_files/output_video.mp4"
        defaultFileExtension = ""
    }


    app.get('/change', (request, response) => {
        //defaultFileExtension = request.body
        console.log(request.body);
        changeFExtentionContr.execute(inputFileName, outputFileName, __dirname);
        response.send(defaultFileExtension)
    })
    // app.get('/applyLogo', (request, response) => {
    //     applyLogoContr.execute();
    // })
    app.get('/reformat', (request, response) => {
        reformatContr.execute(inputFileName, outputFileName, "100:200", __dirname);
        response.send(defaultFileExtension)
    })
    app.get('/cutfile', (request, response) => {
        cutFileContr.execute(inputFileName, outputFileName,
            [new Timeline(1, 2)]
            , __dirname);
        response.send(defaultFileExtension)
    })
    // app.get('/joinFile', (request, response) => {
    //     joinFileContr.execute();
    // })
    app.get('/exit', (request, response) => {
        exitContr.execute();
        response.send(defaultFileExtension)
    })
} catch (error) {
    throw error
}


app.listen(port, () => console.log(`Running on port ${port}`));
