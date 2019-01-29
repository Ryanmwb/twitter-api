
const express = require("express");
const app = express();
const appConfig = require("./config/main-config.js")
const router = express.Router();
const twitterController = require("./controllers/twitterController");

app.use(require("body-parser").urlencoded({extended: false}));

appConfig.init(app, express);

app.get("/", twitterController.landing)
app.get("/tweets/:word/:number", twitterController.search)


module.exports = app;