const User = require('../model/User');


const testRoute = (req, res) => {
    res.render('test');
};

const loginRoute = (req, res) => {
    console.log(req.body)
    // res.send('logged');
};

module.exports = {
    testRoute,
    loginRoute
};