const express = require('express');
const assert = require('assert');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');

const MainController = require('./controllers/MainController');

const app = express();


mongoose.connect('mongodb://localhost/notepad_db');
mongoose.Promise = global.Promise;

// template engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// set static resources
app.use(express.static('./dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(session({
    secret: 'secret',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

MainController(app);

app.listen(8080);
console.log('you re listening to the server! port:8080');