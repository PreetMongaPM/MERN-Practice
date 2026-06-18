const ImageKit = require("@imagekit/nodejs");

const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

const getImageURL = async (buffer, name)=>{
    const result = await client.files.upload({
            file: buffer.toString("base64"),
            fileName: name,
        }
    )
    return result.url; 
}

module.exports = getImageURL;