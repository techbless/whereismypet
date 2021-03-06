import express, { Application } from "express";

import IndexRouter from "./routes/index";
import MarkerRouter from "./routes/marker";

class App {
  public app!: Application;

  constructor() {
    this.app = express();

    this.app.use(express.static(__dirname + "/public"));
    this.app.set("view engine", "ejs");
    this.app.set("views", __dirname + "/views");

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use("/", IndexRouter);
    this.app.use("/marker", MarkerRouter);
  }
}

export default new App().app;
