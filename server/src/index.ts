import express from 'express'
import dotenv from 'dotenv'
const path = require('path')

// controllers
import Editor from './editor/Editor'
import ChangeFExtentionContr from './controllers/ChangeFExtentionContr'
import ChangeSizeContr from './controllers/ChangeSizeContr'

const editor = new Editor;
const changeFExtentionContr = new ChangeFExtentionContr(editor);
const changeSizeContr = new ChangeSizeContr(editor);

// dotenv
dotenv.config({path: "../.env"})

const app = express()
const port = process.env.EXPRESS_PORT

// app
app.use(express.json())

app.get('/', (request, response) => {
    
    return response.sendFile(path.join(__dirname, '/../../index.html'))

})

app.post('/api/video', (request, response) => {
    console.log(request.body)
    return response.sendStatus(200)
})

app.listen(port, () => console.log(`Running on port ${port}`))
