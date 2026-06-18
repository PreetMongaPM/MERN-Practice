const express = require("express");
const connectDB = require("./db/db.js");

connectDB()
const app = express();

app.use(express.json());

module.exports = app;