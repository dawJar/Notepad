const express = require('express');
const assert = require('assert');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const multer = require('multer');
const mongoose = require('mongoose');

const MainController = require('./controllers/MainController');

// const upload = multer();
const app = express();



mongoose.connect('mongodb://localhost/notepad_db');
mongoose.Promise = global.Promise;

// template engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// set static resources
app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(session({
    secret: 'secret',
    // name: 'cookie_name',
    // store: sessionStore, // connect-mongo session store
    // cookie: { maxAge: 60 },
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

// app.use(upload.array());

// example middleware for test route
// app.use('/test', function (req, res, next) {
//     console.log('req recieved at: ', Date.now());
//     next();
// });

MainController(app);

app.listen(8080);
console.log('you re listening to the server! 8080');