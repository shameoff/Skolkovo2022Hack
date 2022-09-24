import express from "express"
import {
    todoSomething
} from "../controllers/videoController"

const videoRouter = express.Router();
videoRouter.get("/", todoSomething);
videoRouter.post("/send/video", todoSomething);

export default videoRouter;