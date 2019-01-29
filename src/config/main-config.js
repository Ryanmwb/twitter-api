require('dotenv').config();
const path = require('path');
const viewsFolder = path.join(__dirname, "..", "views");
const logger = require('morgan');
const flash = require("express-flash");
const bodyParser = require("body-parser");
const session = require("express-session");


module.exports = {
    init(app, express){
        app.set("views", viewsFolder);
        app.set("view engine", "ejs");
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(express.static(path.join(__dirname, "..", "assets")));
        app.use(logger('dev'));
        app.use(flash());
        app.use(session({
            secret: process.env.secret,
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 1.21e+9 } //set cookie to expire in 14 days
        }));
    }
}