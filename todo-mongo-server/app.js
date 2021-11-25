var express = require("express");
var path = require("path");
var logger = require("morgan");

require("dotenv").config();
require("./models/setupMongo")();

var userRouter = require("./routes/user");
var authRouter = require("./routes/auth");
var todoRouter = require("./routes/todo");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/todo", todoRouter);

module.exports = app;
