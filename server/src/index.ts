import express from 'express'
import dotenv from 'dotenv'
import log4js from 'log4js'

dotenv.config()
const logger = log4js.getLogger()
logger.level = process.env.LOG_LEVEL || ''

const app = express()
const port = process.env.EXPRESS_PORT

app.use(express.json())

//app.use(express.urlencoded({extended: true}))

const firstNumber = 93
const secondNumber = 23423
app.get('/', (request, response) => {
    response.send(firstNumber + secondNumber + ' hi, guys')
})
app.post('/api/video', (request, response) => {
    console.log(request.body)
    return response.sendStatus(200)
})

app.listen(port, () => console.log(`Running on port ${port}`))
