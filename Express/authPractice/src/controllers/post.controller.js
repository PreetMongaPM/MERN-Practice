const jwt = require("jsonwebtoken");
const userModel = require("../models/model.js");

const createPost = async (req, res) => {
  const token = req.cookies.token;

  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const id = decoded.id;
    await userModel.find({ _id: id });
    res.status(201).json({ message: "Post created successfully!" });
  } catch (err) {
    console.log("Not authorised");
    res.status(403).json({
      message: "You are not allowed to create post",
    });
  }
};

module.exports = { createPost };
