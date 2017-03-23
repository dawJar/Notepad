const User = require('../model/User');


const mainRoute = (req, res) => {
    let { user } = req.session;
    res.render('index', { user });
};

module.exports = mainRoute;