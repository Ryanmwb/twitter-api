const path = require('path');
const viewsFolder = path.join(__dirname, "..", "views");
const logger = require('morgan');
const flash = require("express-flash");
const bodyParser = require("body-parser");

module.exports = {
    init(app, express){
        app.set("views", viewsFolder);
        app.set("view engine", "ejs");
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(logger('dev'));
        app.use(flash());
    }
}