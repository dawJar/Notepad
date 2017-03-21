const User = require('../model/User');


const loginRoute = (req, res) => {
    res.render('signup');
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

                    // TODO: replace with logged in path render!!!!! 
                    res.send({ loginUser: true, message: `logged in as ${ login }`});
                }

            });        
    }
};



module.exports = {
    loginRoute,
    loginUserRoute
};