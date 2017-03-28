const mainRoute = require('../routes/mainRoutes');
const { addNewUserRoute } = require('../routes/signupRoutes');
const { 
    logoutUserRoute,
    loginUserRoute 
} = require('../routes/loginRoutes');
const { 
    notepadUpdateNoteImportance,
    notepadAddNoteToDb,
    notepadFetchNotes,
    notepadUpdateNote,
    notepadRedirectToNotepad,
    notepadRoute,
    removeNote
} = require('../routes/notepadRoutes');


module.exports = function (app) {

    app.get('/', mainRoute);

    app.post('/attempt-signup', addNewUserRoute);

    app.post('/attempt-login', loginUserRoute);

    // app.get('/logout', logoutRoute);

    app.post('/logout-user', logoutUserRoute);

    // app.get('/notepad', notepadRoute);

    app.post('/fetch-notes', notepadFetchNotes);

    app.get('/notepad/add-note', notepadRedirectToNotepad);

    app.get('/notepad/edit-note', notepadRedirectToNotepad);

    app.post('/add-note', notepadAddNoteToDb);

    app.post('/update-note', notepadUpdateNote);

    app.post('/update-note-importance', notepadUpdateNoteImportance);

    app.post('/remove-note', removeNote);

    app.get('*', mainRoute);

};