const express = require("express");
const postController = require("../controllers/post.controller.js")

const router = express.Router();

router.post("/create-post", postController.createPost);

module.exports = router;