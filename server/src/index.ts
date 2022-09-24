import express from 'express'
import dotenv from 'dotenv'
const fs = require("fs");


// controllers
import Editor from './editor/Editor'
import ChangeFExtentionContr from './controllers/ChangeFExtentionContr'
import ChangeSizeContr from './controllers/ChangeSizeContr'

const editor = new Editor;
const changeFExtentionContr = new ChangeFExtentionContr(editor);
const changeSizeContr = new ChangeSizeContr(editor);

// dotenv
dotenv.config()

const app = express()
const port = process.env.EXPRESS_PORT

// app
app.use(express.json())

app.get('/', (request, response) => {
    
    return response.download('./index.html')

})



app.post('/api/video', (request, response) => {
    console.log(request.body)
    return response.sendStatus(200)
})

app.listen(port, () => console.log(`Running on port ${port}`))
