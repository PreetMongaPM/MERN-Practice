const express = require("express");
const cookieParser = require("cookie-parser")
const connectDB = require("./db/db.js");
const authRoutes = require("./routes/auth.routes.js")
const musicRoutes = require("./routes/music.routes.js")
const multer = require("multer");


const app = express();

connectDB();
app.use(express.json());
app.use(cookieParser());
const upload = multer({storage: multer.memoryStorage()});

//routes
app.use("/api/auth", authRoutes);
app.use("/api/music", upload.single("music"), musicRoutes)

module.exports = app;