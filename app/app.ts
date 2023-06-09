import express, { Express, Request, Response } from 'express';

const app: Express = express();

const http = require("http").createServer(app);
const port = process.env.PORT || 8000;

app.get('/', async (req: Request, res: Response) => {
  res.send("Express+ TypeScript Server")
})

http.listen(port, () => {
  console.log(port)
})
