const { mainRoute, errorRoute } = require('../routes/mainRoutes');
const { addNewUserRoute } = require('../routes/signupRoutes');
const { logoutUserRoute, loginUserRoute } = require('../routes/loginRoutes');
const { 
    notepadUpdateNoteImportance,
    notepadRedirectToNotepad,
    notepadAddNoteToDb,
    notepadFetchNotes,
    notepadUpdateNote,
    notepadRoute,
    removeNote
} = require('../routes/notepadRoutes');


module.exports = function (app) {

    app.get('/', mainRoute);

    app.get('/login', mainRoute);

    app.get('/signup', mainRoute);

    app.get('/notepad', notepadRoute);

    app.post('/attempt-signup', addNewUserRoute);

    app.post('/attempt-login', loginUserRoute);

    app.post('/logout-user', logoutUserRoute);

    app.post('/fetch-notes', notepadFetchNotes);

    app.get('/notepad/add-note', notepadRedirectToNotepad);

    app.get('/notepad/edit-note', notepadRedirectToNotepad);

    app.post('/add-note', notepadAddNoteToDb);

    app.post('/update-note', notepadUpdateNote);

    app.post('/update-note-importance', notepadUpdateNoteImportance);

    app.post('/remove-note', removeNote);

    app.get('*', errorRoute);

};