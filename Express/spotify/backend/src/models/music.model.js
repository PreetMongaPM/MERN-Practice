const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
    uri: {
        type: String, 
        required: true, 
        unique: true
    }, 
    title: {
        type: String, 
        required: true
    },
    artist:{
        type: mongoose.Schema.Types.ObjectId,
        refer: "user",
        required: true
    }
})

const musicModel = mongoose.model("music", musicSchema);


module.exports = musicModel;