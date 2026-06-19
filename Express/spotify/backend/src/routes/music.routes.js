const express = require("express");
const musicController = require("../controllers/music.controller.js");

const router = express.Router();

router.post("/create-music", musicController.createMusic);

module.exports = router;
