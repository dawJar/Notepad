const User = require('../model/User');
// User.Promise = global.Promise;


const signUpRoute = (req, res) => {
    res.render('signup');
};


const addNewUserRoute = (req, res) => {
    let { firstName, login, password } = req.body;

    let specialCharsRegex = /^[a-zA-Z\d\-_.,\s]+$/;

    if (login.length < 4) {
        res.send({ addedNewUser: false, message: 'login must have at least 5 chars!' });
    } else if (!specialCharsRegex.test(login)) {
        res.send({ addedNewUser: false, message: 'login cannot contain special chars!' });
    } else if (password.length < 5) {
        res.send({ addedNewUser: false, message: 'password must have at least 6 chars!' });
    } else {

        User.findOne({ login })

            .then((result) => {

                if (result !== null) {
                    res.send({ addedNewUser: false, message: 'user already exsists!' });
                } else {
                    let userData = { firstName, login, password };
                    let user = new User(userData);

                    user.save()

                        .then(() => {

                            // TODO: replace with logged in path render!!!!!

                            res.send({ addedNewUser: true, message: 'account created' });
                        });
                }
                
            });
    }
};

module.exports = {
    signUpRoute,
    addNewUserRoute
};