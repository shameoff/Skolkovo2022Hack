import createError from "http-error"
import {codes} from "../enumerations/errorType";

async function todoSomething(request, response) {
    console.log(request.body)
    response.send("sfssd")
}

export {todoSomething}
