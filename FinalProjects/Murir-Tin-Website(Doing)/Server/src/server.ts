import { Request, Response } from "express";

import mongoose from "mongoose";
import app from "./app";
import config from "./config";
// const port = 3000;

async function server() {
  try {
    app.get("/", (req: Request, res: Response) => {
      res.send("Hello World!");
    });

    mongoose.connect(config.database_url);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("There is an Error");
  }
}

server().catch((err) => console.log(err));