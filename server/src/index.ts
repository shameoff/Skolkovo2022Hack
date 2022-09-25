import express from 'express'
import dotenv from 'dotenv'

// controllers
import Editor from './editor/Editor'
import ChangeFExtentionContr from './controllers/ChangeFExtentionContr'
import ApplyLogoContr from './controllers/ApplyLogoContr'
import ReformatContr from './controllers/ReformatContr'
import ExitContr from './controllers/ExitContr'
import CutFileContr from './controllers/CutFileContr'
import JoinFileContr from './controllers/JoinFileContr'

const editor = new Editor;
const changeFExtentionContr = new ChangeFExtentionContr(editor);
const applyLogoContr = new ApplyLogoContr(editor);
const reformatContr = new ReformatContr(editor);
const exitContr = new ExitContr(editor);
const cutFileContr = new CutFileContr(editor);
const joinFileContr = new JoinFileContr(editor);

// dotenv
dotenv.config()

const app = express()
const port = process.env.EXPRESS_PORT

// app
app.use(express.json())

app.get('/', (request, response) => {
    
    
    
    
    

    
})

app.get('/change', (request, response) => {
    changeFExtentionContr.execute();
})
app.get('/applyLogo', (request, response) => {
    applyLogoContr.execute();
})
app.get('/reformat', (request, response) => {
    reformatContr.execute();
})
app.get('/cutFile', (request, response) => {
    cutFileContr.execute();
})
app.get('/joinFile', (request, response) => {
    joinFileContr.execute();
})
app.get('/exit', (request, response) => {
    exitContr.execute();
})



app.post('/api/video', (request, response) => {
    console.log(request.body)
    return response.sendStatus(200)
})

app.listen(port, () => console.log(`Running on port ${port}`))
