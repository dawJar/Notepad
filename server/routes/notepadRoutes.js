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

                        .then(() => {
                            res.redirect('/notepad');
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

                    .then((result) => { 
                        // TODO: response!
                        console.log(result);
                        res.send('dsadsa');
                    })

            });
    }
};

module.exports = {
    notepadRoute,
    notepadFetchNotes,
    notepadAddNote,
    notepadAddNoteToDb,
    notepadUpdateNoteImportance
};