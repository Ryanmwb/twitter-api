
const express = require("express");
const app = express();
const appConfig = require("./config/main-config.js")
const router = express.Router();
const twitterController = require("./controllers/twitterController");

//router.get("/", twitterController.landing)
router.get("/", function(req, res, next){
    console.log("landing function is starting...")
    if(err){
        console.log(err)
    } else {
        console.log("no landing error...");
        res.render("static/landing");
    }
    
})

app.use(require("body-parser").urlencoded({extended: false}));

appConfig.init(app, express);

module.exports = app;