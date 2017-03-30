const User = require('../model/User');


const notepadRoute = (req, res) => {
    console.log(req.method, req.url);
    console.log(req.method, req.url, req.session.user);

    let { user } = req.session;

    if (user === undefined) {
        res.redirect('/login');
    } else {
        res.render('index');
    }
};


const notepadFetchNotes = (req, res) => {
    console.log(req.method, req.url);
    console.log(req.method, req.url, req.session.user);

    let { user } = req.session;

    if (user === undefined) {
        res.redirect('/login');
    } else {
        User.findOne({ login: user })

            .then((userData) => res.send({ userData }));
    }
};

const notepadRedirectToNotepad = (req, res) => {
    console.log(req.method, req.url);
    console.log(req.method, req.url, req.session.user);

    let { user } = req.session;
    if (user === undefined) {
        res.redirect('/login');
    } else {
        res.redirect('/notepad');
    }
};

const notepadAddNoteToDb = (req, res) => {
    console.log(req.method, req.url);
    console.log(req.method, req.url, req.session.user);

    let { user } = req.session;
    let { category, title, content } = req.body;

    if (user === undefined) {
        res.redirect('/login');
    } else if (title === '' || content === '') {
        res.redirect('/notepad');
    } else {
        User.findOne({ login: user })

            .then((result) => {

                if (result !== null) {
                    let { notes, userNoteCategories } = result;
                    
                    notes = [ 
                        ...notes, 
                        { category, title, content } 
                    ];

                    let shouldBeAddedAsNewCategory = userNoteCategories
                                            .filter(cat => category === cat).length === 0;
                    
                    if (shouldBeAddedAsNewCategory) 
                        userNoteCategories = [ ...userNoteCategories, category ];
                    
                    User.findOneAndUpdate({ login: user }, 
                        { $set: { notes, userNoteCategories }})

                        .then((userData) => {
                            res.send({ userData });
                        });
                }
            });
    }
};

const notepadUpdateNoteImportance = (req, res) => {
    console.log(req.method, req.url);
    console.log(req.method, req.url, req.session.user);

    let { user } = req.session;
    let { noteId, importance } = req.body;

    if (user === undefined) {
        res.redirect('/login');
    } else {
        User.findOne({ login: user })

            .then((result) => {

                User.update({ 'notes': {
                    $elemMatch: {
                        '_id' : noteId         
                    }   
                }}, {
                    '$set': {
                        'notes.$.importance': importance
                    }
                })

                    .then(() => { 

                        User.findOne({ login: user })

                            .then((userData) => {

                                res.send({ userData });

                            });

                    });

            });
    }
};

const notepadUpdateNote = (req, res) => {
    console.log(req.method, req.url);
    console.log(req.method, req.url, req.session.user);
    
    let { user } = req.session;
    let { 
        currentContentOfEdditingNote,
        currentTitleOfEdditingNote,
        selectedNoteToEdit
    } = req.body;

    if (user === undefined) {
        res.redirect('/login');
    } else {
        User.findOne({ login: user })

            .then((result) => {

                User.update({ 'notes': {
                    $elemMatch: {
                        '_id' : selectedNoteToEdit         
                    }   
                }}, {
                    '$set': { 
                        'notes.$.title': currentTitleOfEdditingNote,
                        'notes.$.content': currentContentOfEdditingNote 
                    } 
                })

                    .then(() => { 

                        User.findOne({ login: user })

                            .then((userData) => {
                                
                                res.send({ userData });

                            });

                    });

            });
    }
};

const removeNote = (req, res) => {
    console.log(req.method, req.url);
    console.log(req.method, req.url, req.session.user);

    let { user } = req.session;
    let { noteId } = req.body;

    if (user === undefined) {
        res.redirect('/login');
    } else {
        User.findOne({ login: user })

            .then((result) => {

                if (result !== null) {
                    let { notes, userNoteCategories } = result;
                    
                    let noteToRemove = notes.filter(note => String(note._id) === noteId);
                    let newNotes = notes.filter(note => String(note._id) !== noteId);

                    let notesWithSameCategory = newNotes.filter(note => 
                                            note.category === noteToRemove[0].category);
                    if (notesWithSameCategory.length === 0) {
                        userNoteCategories = userNoteCategories.filter(category => 
                                                    category !== noteToRemove[0].category)
                    }

                    User.findOneAndUpdate({ login: user }, 
                        { $set: { notes: newNotes, userNoteCategories }})

                        .then(() => {
                            
                            User.findOne({ login: user })
                                .then((userData) => res.send({ userData }));
                            
                        });
                }
            });
    }
};

module.exports = {
    notepadUpdateNoteImportance,
    notepadRedirectToNotepad,
    notepadAddNoteToDb,
    notepadFetchNotes,
    notepadUpdateNote,
    notepadRoute,
    removeNote
};