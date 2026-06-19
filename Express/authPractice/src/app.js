const express = require("express");
const connectDB = require("./db/db.js");
const cookieParser = require("cookie-parser")
const authRoutes = require("./routes/auth.routes.js")
const postRoutes = require("./routes/post.routes.js")

connectDB()
const app = express();
app.use(cookieParser());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/post", postRoutes);

module.exports = app;