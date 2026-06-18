const mongoose = require("mongoose");

const socialSchema = new mongoose.Schema(
    {
        imageURL: String,
        caption: String
    }
)

const socialModel = mongoose.model('post', socialSchema);

module.exports = socialModel;