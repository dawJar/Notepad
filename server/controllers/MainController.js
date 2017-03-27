const mainRoute = require('../routes/mainRoutes');
const { addNewUserRoute } = require('../routes/signupRoutes');
const { 
    loginUserRoute, 
    logoutRoute 
} = require('../routes/loginRoutes');
const { 
    notepadUpdateNoteImportance,
    notepadAddNoteToDb,
    notepadFetchNotes,
    notepadUpdateNote,
    notepadAddNote,
    notepadRoute,
    removeNote
} = require('../routes/notepadRoutes');


module.exports = function (app) {

    app.get('/', mainRoute);

    app.post('/signup', addNewUserRoute);

    app.post('/login', loginUserRoute);

    app.get('/logout', logoutRoute);

    app.get('/notepad', notepadRoute);

    app.post('/fetch-notes', notepadFetchNotes);

    app.get('/notepad/add-note', notepadAddNote);

    app.post('/add-note', notepadAddNoteToDb);

    app.post('/update-note', notepadUpdateNote);

    app.post('/update-note-importance', notepadUpdateNoteImportance);

    app.post('/remove-note', removeNote);

    app.get('*', mainRoute);

};