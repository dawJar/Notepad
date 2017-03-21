const User = require('../model/User');


const mainRoute = (req, res) => {
    res.render('index');
};

module.exports = mainRoute;