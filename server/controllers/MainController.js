const mainRoute = require('../routes/mainRoute');
const { testRoute, loginRoute } = require('../routes/testRoute');


module.exports = function (app) {

    app.get('/', mainRoute);

    app.get('/test', testRoute);

    app.post('/login', loginRoute);

};