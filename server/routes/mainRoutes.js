const User = require('../model/User');


const mainRoute = (req, res) => {
    console.log(req.method, req.url);

    res.render('index');
};

module.exports = mainRoute;