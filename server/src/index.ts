import express from 'express'
import dotenv from 'dotenv'
import videoRouter from "../routes/router"

dotenv.config({path: "../.env"})
const app = express()
const port = process.env.EXPRESS_PORT

app.use(express.json())

app.use(videoRouter)

app.listen(port, () => console.log(`Running on port ${port}`))
