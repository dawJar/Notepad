const User = require('../model/User');


const signUpRoute = (req, res) => {
    res.render('signup');
};

const addNewUserRoute = (req, res) => {
    let { firstName, login, password } = req.body;

    if (login.length < 4) {
        res.render('signup', { message: 'login must have minimum 5 characters' });
    } else if (password.length < 5) {
        res.render('signup', { message: 'password must have minimum 6 characters' });
    } else {
        let userData = { firstName, login, password };
        let user = new User(userData);
        user.save().then(() => {
            res.render('signup', { message: 'account created' });
        });
    }
};

module.exports = {
    signUpRoute,
    addNewUserRoute
};