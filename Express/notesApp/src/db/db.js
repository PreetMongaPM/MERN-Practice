const mongoose = require("mongoose");

async function connectToDB() {
  await mongoose.connect(
    "mongodb+srv://PreetMongaClerisy:qvVu0yPRtdpK3YsZ@mern-practice.exsv0jj.mongodb.net/notes",
  );
  console.log("Connected to DB successfully!");
}

module.exports = connectToDB;
