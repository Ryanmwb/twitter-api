const express = require("express");
const router = express.Router();
const twitterController = require("../controllers/twitter");

router.get("/", twitterController.landing)