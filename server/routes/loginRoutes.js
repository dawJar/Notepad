const User = require('../model/User');


const loginUserRoute = (req, res) => {
    console.log(req.method, req.url);

    let { login, password } = req.body;

    if (!login || !password) {
        res.status('400');
        res.send({ addedNewUser: false, message: 'invalid details!' });
    } else {
        User.findOne({ login })

            .then((result) => {

                if (result === null) {
                    res.send({ 
                        isUserLoggedIn: false, 
                        message: 'user does not exsists!' 
                    });
                } else if (result.password !== password) {
                    res.send({ 
                        isUserLoggedIn: false, 
                        message: 'wrong login or password!' 
                    });
                } else {
                    req.session.user = login;
                    let { user } = req.session;

                    let userData = { 
                        user, 
                        isUserLoggedIn: true, 
                        message: `logged in as ${ user }`
                    }
                    
                    res.send(userData);
                }

            });        
    }
};

const logoutUserRoute = (req, res) => {
    console.log(req.method, req.url);
    
    req.session.destroy(() => console.log('user logged out'));
    res.send({ message: 'user logged out' });
}

module.exports = {
    logoutUserRoute,
    loginUserRoute,
};