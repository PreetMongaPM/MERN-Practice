const express = require("express");
const socialModel = require("./models/social.model.js");
const multer = require("multer");
const connectDB = require("./db/db.js")
const getImageURL = require("./services/storage.service.js")
const cors = require("cors");

const app = express();
app.use(cors());
connectDB();

const upload = multer({storage : multer.memoryStorage()})

app.use(express.json()); //middleware

app.get("/feed", async (req, res)=>{
    const posts = await socialModel.find();
    res.status(200).json(posts);
})

app.post("/create-post", upload.single('image'), async(req, res)=>{
    const image = req.file.buffer; //image file
    const imageName = req.file.originalname;
    const caption = req.body.caption;
    const imageURL = await getImageURL(image, imageName);

    const post = await socialModel.create({
        imageURL: imageURL,
        caption: caption,
    })

    res.status(201).json({
        message:'Post created successfully',
        post: post
    })
})

module.exports = app;