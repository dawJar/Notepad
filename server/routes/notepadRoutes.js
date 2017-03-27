const User = require('../model/User');


const notepadRoute = (req, res) => {
    let { user } = req.session;

    if (user === undefined) {
        res.redirect('/login');
    } else {
        res.render('notepad', { user });
    }
};


const notepadFetchNotes = (req, res) => {
    let { user } = req.session;

    if (user === undefined) {
        res.redirect('/login');
    } else {
        User.findOne({ login: user })

            .then((userData) => {

                res.send({ userData });

            });
    }
};

const notepadAddNote = (req, res) => {
    let { user } = req.session;
    if (user === undefined)
        res.redirect('/login');
    res.redirect('/notepad');
};

const notepadAddNoteToDb = (req, res) => {
    let { user } = req.session;
    let { category, title, content } = req.body;

    if (user === undefined) {
        res.redirect('/login');
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
    let { user } = req.session;
    let { noteId, importance } = req.body;

    if (user === undefined) {
        res.redirect('/login');
    } else {
        User.findOne({ login: user })

            .then((result) => {

                // console.log(result)
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

const removeNote = (req, res) => {
    let { user } = req.session;
    let { noteId } = req.body;

    if (user === undefined) {
        res.redirect('/login');
    } else {
        User.findOne({ login: user })

            .then((result) => {

                if (result !== null) {
                    let { notes } = result;
                    
                    // let newNotes = notes.filter(note => String(note._id) !== noteId);
                    notes = notes.filter(note => String(note._id) !== noteId);

                    User.findOneAndUpdate({ login: user }, 
                        { $set: { notes }})

                        .then(() => {
                            
                            User.findOne({ login: user })
                                .then((userData) => res.send({ userData }));
                            
                        });
                }
            });
    }
};

module.exports = {
    notepadRoute,
    notepadFetchNotes,
    notepadAddNote,
    notepadAddNoteToDb,
    notepadUpdateNoteImportance,
    removeNote
};