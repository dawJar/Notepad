const User = require('../model/User');


const notepadRoute = (req, res) => {
    let { user } = req.session;
    console.log(user)
    res.render('notepad', { user });

    // if (user === undefined) {
    //     res.redirect('/login');
    // } else {
    //     User.findOne({ login: user })

    //         .then((result) => {
    //             let { notes } = result;

    //             if (notes.length === 0) {
    //                 console.log('no notes')
    //                 // res.render('notepad', { anyNotes: false });
    //                 res.render('notepad');
    //             } else {
    //                 console.log('got some notes')
    //                 // res.render('notepad', { anyNotes: true, notes });
    //                 res.render('notepad');
    //             }
    //         });

    // }
};

// const notepadUserRoute = (req, res) => {
//     let { user } = req.session;
//     if (user === undefined) {
//         res.redirect('/login');
//     } else {
//         User.findOne({ login: user })

//             .then((result) => {
//                 let { notes } = result;

//                 if (notes.length === 0) {
//                     console.log('no notes')
//                     // res.render('notepad', { anyNotes: false });
//                     res.render('notepad', { user });
//                 } else {
//                     console.log('got some notes')
//                     // res.render('notepad', { anyNotes: true, notes });
//                     res.render('notepad', { user });
//                 }
//             });

//     }
// };

module.exports = {
    notepadRoute,
    notepadUserRoute
};