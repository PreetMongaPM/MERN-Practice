const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{

        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected successfully");
    }
    catch(err){
        console("DB connection failed due to: ", err);
    }
}

module.exports = connectDB;