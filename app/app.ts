import express, { Express, Request, Response } from 'express';

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
import dotenv from "dotenv";

import db from './models';

dotenv.config();

const app: Express = express();

const http = require("http").createServer(app);
const port = process.env.PORT || 3000;

import commentRoutes from './routes/comment_routes';

let comments_controller = require(__dirname + "/controllers/comments/comment");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", express.static(__dirname + "/"));
app.use('/', commentRoutes);
app.use(cors());

app.get('/', async (req: Request, res: Response) => {
  res.send("Express+ TypeScript Server")
})

http.listen(port, () => {
  console.log("Comments App")
  console.log(port)
})
