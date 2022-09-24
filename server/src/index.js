import express, { request } from "express";
import dotenv from "dotenv";
import upload from "express-fileupload";
import cors from "cors";
import fs from "fs";
import pathH from "path";
import multer from "multer";
const upload = multer();

const busboy = require("connect-busboy");

const path = require("path");

// dotenv
dotenv.config({ path: "../.env" });

const app = express();
const port = process.env.EXPRESS_PORT;

app.options("*", cors());
app.use(cors());
// app.use(express.json())
app.use;
app.use(busboy());

app.get("/", (request, response) => {
  return response.sendFile(path.join(__dirname, "./../../index.html"));
});

app.post("/video", upload.any(), (request, response) => {
  console.log(request.body);
  console.log(request.files);
  return response.sendStatus(200);
});

app.listen(port, () => console.log(`Running on port ${port}`));