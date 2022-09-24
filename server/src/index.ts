import express from 'express'
import dotenv from 'dotenv'

import log4js from 'log4js'

// controllers
import Editor from './editor/Editor'
import ChangeFExtentionContr from './controllers/ChangeFExtentionContr'
import ChangeSizeContr from './controllers/ChangeSizeContr'

const editor = new Editor;
const changeFExtentionContr = new ChangeFExtentionContr(editor);
const changeSizeContr = new ChangeSizeContr(editor);

// dotenv
dotenv.config()
const logger = log4js.getLogger()
logger.level = process.env.LOG_LEVEL || ''

const app = express()
const port = process.env.EXPRESS_PORT

// app
app.use(express.json())

app.get('/', (request, response) => {
    changeFExtentionContr.execute("mp3");
})



app.post('/api/video', (request, response) => {
    console.log(request.body)
    return response.sendStatus(200)
})

app.listen(port, () => console.log(`Running on port ${port}`))
