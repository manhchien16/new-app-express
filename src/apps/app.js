const express = require("express");
const app = express();
const router = express.Router();
const config = require("config")
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(config.get("app.staticFouder")));
app.use(require(config.get("app.router")))

module.exports = app;