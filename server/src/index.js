import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import multer from "multer";
import path from "path";

const upload = multer();

// dotenv
dotenv.config({path: "../.env"});

const app = express();
const port = process.env.EXPRESS_PORT;

app.options("*", cors());
app.use(cors());

app.get("/", (request, response) => {
    return response.sendFile(path.join(__dirname, "./../../index.html"));
});

app.post("/video", upload.any(), (request, response) => {
    console.log(request.body);
    console.log(request.files);
    const files = request.files
    for (let i = 0; i < files.length; i += 1) {
        let fileName = files[i].originalname
        let index = fileName.lastIndexOf('.')
        let fileExtencion = fileName.substr(index, fileName.length)
        console.log(fileExtencion)
        fs.writeFileSync("./data/old_video" + fileExtencion, files[i].buffer)
    }
    return response.sendStatus(200);
});

app.listen(port, () => console.log(`Running on port ${port}`));
