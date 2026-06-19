const ImageKit = require("@imagekit/nodejs");

const client = new ImageKit({
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
});

const getMusicLink = async(file, title)=>{
    const result = await client.files.upload({
        file: file, 
        fileName: title + Date.now(),
        folder: "music"
    })
    return result.url;
}

module.exports = getMusicLink;