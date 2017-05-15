var express = require("express");
var mongoose = require('mongoose');
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
mongoose.connect('mongodb://localhost/users');
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
var route =  require('./routes/index.js')(app, mongoose);
