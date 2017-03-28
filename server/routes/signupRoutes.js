const User = require('../model/User');


const addNewUserRoute = (req, res) => {
    console.log(req.method, req.url);

    let { firstName, login, password } = req.body;

    let specialCharsRegex = /^[a-zA-Z\d\-_.,\s]+$/;

    if (!firstName || !login || !password) {
        res.status('400');
        res.send({ addedNewUser: false, message: 'invalid details!' });
    } else if (login.length < 4) {
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
                            req.session.user = login;
                            let { user } = req.session;
                            
                            res.send({ user, addedNewUser: true, message: `signed up and logged in as ${ user }`});
                        });
                }
                
            });
    }
};

module.exports = {
    addNewUserRoute
};