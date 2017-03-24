const mainRoute = require('../routes/mainRoutes');
const { 
    signUpRoute, 
    addNewUserRoute 
} = require('../routes/signupRoutes');
const { 
    loginRoute, 
    loginUserRoute, 
    logoutRoute 
} = require('../routes/loginRoutes');
const { 
    notepadRoute,
    notepadUserRoute,
    notepadAddNote,
    notepadAddNoteToDb
} = require('../routes/notepadRoutes');


module.exports = function (app) {

    app.get('/', mainRoute);

    app.get('/signup', signUpRoute);

    app.post('/signup', addNewUserRoute);

    app.get('/login', loginRoute);

    app.post('/login', loginUserRoute);

    app.get('/logout', logoutRoute);

    app.get('/notepad', notepadRoute);

    app.post('/fetch-notes', notepadUserRoute);

    app.get('/notepad/add-note', notepadAddNote);

    app.post('/add-note', notepadAddNoteToDb);

};