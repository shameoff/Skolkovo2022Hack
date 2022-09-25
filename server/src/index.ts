import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"
const path = require('path')


// dotenv
dotenv.config({path: "../.env"})

const app = express()
const port = process.env.EXPRESS_PORT

app.options("*", cors())
app.use(cors())
app.use(express.json())


app.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, './../../index.html'))

})

app.listen(port, () => console.log(`Running on port ${port}`))
