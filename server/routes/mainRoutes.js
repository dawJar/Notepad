const User = require('../model/User');


const mainRoute = (req, res) => {
    console.log(req.session.user);
    res.render('index');
};

module.exports = mainRoute;