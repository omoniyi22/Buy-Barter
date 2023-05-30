import express from "express";
import http from 'http';
import bodyparser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from "mongoose";
import router from "./router";
const app = express();

import {
  APP_PORT,
  MONGO_URI,
} from "./config/keys"

app.use(cors({
  credentials: true
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyparser.json());

const server = http.createServer(app)

let port = process.env.PORT || APP_PORT

server.listen(port, () => {
  console.log(`Server running on PORT ${APP_PORT}`)
})


mongoose.Promise = Promise;
mongoose.connect(MONGO_URI).then((connected) => console.log("DB connected"))

mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router())

app.get("/*", (req, res) => {
  res.send("Welcome to Buy-Barter API v1.0");
});

export default app;