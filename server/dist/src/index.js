"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var log4js_1 = __importDefault(require("log4js"));
dotenv_1["default"].config();
var logger = log4js_1["default"].getLogger();
logger.level = process.env.LOG_LEVEL || '';
var app = (0, express_1["default"])();
var port = process.env.PORT;
app.use(express_1["default"].json());
//app.use(express.urlencoded({extended: true}))
var firstNumber = 93;
var secondNumber = 23423;
app.get('/', function (request, response) {
    response.send(firstNumber + secondNumber + ' hi, guys');
});
app.post('/api/video', function (request, response) {
    console.log(request.body);
    return response.sendStatus(200);
});
app.listen(port, function () { return console.log("Running on port ".concat(port)); });
//# sourceMappingURL=index.js.map