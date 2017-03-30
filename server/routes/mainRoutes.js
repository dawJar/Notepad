const User = require('../model/User');


const mainRoute = (req, res) => {
    console.log(req.method, req.url);

    res.render('index');
};

const errorRoute = (req, res) => {
    console.log(req.method, req.url);

    res.render('error');
};

module.exports = {
    mainRoute,
    errorRoute
};