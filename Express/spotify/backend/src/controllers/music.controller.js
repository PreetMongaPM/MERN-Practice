const musicModel = require("../models/music.model.js");
const userModel = require("../models/user.model.js");
const getMusicLink = require("../services/storage.service.js")
const jwt = require("jsonwebtoken");

const createMusic = async (req, res) => {
    
    const token  = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const isUserValid = await userModel.findOne({_id: decoded.id});
    
    if(!isUserValid){
        return res.status(403).json({message: "Invalid credentials"});
    }
    
    if(decoded.role !== 'artist'){
        return res.status(403).json({ message: "You are not a artist!"});
    }
    
    const musicFile = req.file;

    if(!musicFile){
        return res.status(400).json({ message: "Music file required" })
    }
    const title = req.body.title;

    const musicLink = await getMusicLink(musicFile.buffer.toString("base64"), title);

    const music = await musicModel.create({
        uri: musicLink, 
        title: title, 
        artist: decoded.id
    })

    res.status(201).json({message: "New music uploaded", music});
};

module.exports = { createMusic };
