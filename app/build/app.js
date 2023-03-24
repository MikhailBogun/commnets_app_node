"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const http = require("http").createServer(app);
const port = process.env.PORT || 3000;
const comment_routes_1 = __importDefault(require("./routes/comment_routes"));
let comments_controller = require(__dirname + "/controllers/comments/comment");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express_1.default.static(__dirname + "/"));
app.use('/', comment_routes_1.default);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Express+ TypeScript Server");
}));
http.listen(port, () => {
    console.log("Comments App");
    console.log(port);
});
