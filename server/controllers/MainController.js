const mainRoute = require('../routes/mainRoute');
const { signUpRoute, addNewUserRoute } = require('../routes/signupRoutes');


module.exports = function (app) {

    app.get('/', mainRoute);

    app.get('/signup', signUpRoute);

    app.post('/signup', addNewUserRoute);

};