"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var router_1 = __importDefault(require("../routes/router"));
dotenv_1["default"].config({ path: "../.env" });
var app = (0, express_1["default"])();
var port = process.env.EXPRESS_PORT;
app.use(express_1["default"].json());
app.use(router_1["default"]);
app.listen(port, function () { return console.log("Running on port ".concat(port)); });
//# sourceMappingURL=index.js.map