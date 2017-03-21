const User = require('../model/User');


const loginRoute = (req, res) => {
    res.render('signup');
};

const loginUserRoute = (req, res) => {
    let { login, password } = req.body;

    User.findOne({ login })

        .then((result) => {

            if (result === null) {
                res.send({ loginUser: false, message: 'user does not exsists!' });
            } else if (result.password !== password) {
                res.send({ loginUser: false, message: 'wrong login or password!' });
            } else {

                // TODO: replace with logged in path render!!!!! 

                res.send({ loginUser: true, message: `logged in as ${ login }`});
            }

        });

};

module.exports = {
    loginRoute,
    loginUserRoute
};