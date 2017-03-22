const User = require('../model/User');


const loginRoute = (req, res) => {
    let { user } = req.session;
    res.render('signup', { user });
};

const loginUserRoute = (req, res) => {
    let { login, password } = req.body;

    if (!login || !password) {
        res.status('400');
        res.send({ addedNewUser: false, message: 'invalid details!' });
    } else {
        User.findOne({ login })

            .then((result) => {

                if (result === null) {
                    res.send({ loginUser: false, message: 'user does not exsists!' });
                } else if (result.password !== password) {
                    res.send({ loginUser: false, message: 'wrong login or password!' });
                } else {
                    req.session.user = login;
                    let { user } = req.session;

                    // TODO: replace with logged in path render!!!!! 
                    res.send({ user, loginUser: true, message: `logged in as ${ user }`});
                    // res.redirect('/notepad');
                }

            });        
    }
};

const logoutRoute = (req, res) => {
    req.session.destroy(() => console.log('user logged out'));
    res.redirect('/login');
}

module.exports = {
    loginRoute,
    loginUserRoute,
    logoutRoute
};