const mainRoute = require('../routes/mainRoute');
const testRoute = require('../routes/testRoute');


module.exports = function (app) {

    app.get('/', mainRoute);

    app.get('/test', testRoute);

};