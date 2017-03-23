const assert = require('assert');
const User = require('./User');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


// connect to db before tests
before((done) => {
    mongoose.connect('mongodb://localhost/notepad');

    mongoose.connection.once('open', () => {
        console.log('connection to db has been made');
        done();
    }).on('error', error => console.log('connection error: ', error));

});
// drop collection
afterEach(done => mongoose.connection.collections.users.drop(() => done()));

let note1 = {
    content: 'some lorem ipsum',
    noteName: 'for exam',
    todo: true
};

let note2 = {
    content: 'some lorem ipsum',
    noteName: 'recipe for cookies with marmalade',
    category: 'cooking'
};

let user1Data = {
    firstName: 'Emily',
    login: 'emiii',
    password: 'loff<3JJ',
    notes: [note1, note2]
};

let user2Data = {
    firstName: 'Emily',
    login: 'emiii',
    password: 'loff<3JJ',
    notes: [note1]
};

let userWithoutReqFields = new User({
    firstName: 'Jimmy'
});

function addUsers(done) {
    user1 = new User(user1Data);
    user2 = new User(user2Data);
    user1.save().then(() => {
        user2.save().then(() => done());
    });
}

describe('#save()', () => {

    it('should save user to db', done => {
        let user1 = new User(user1Data);

        user1.save().then(() => {
            User.findOne({ login: user1.login }).then((result) => {
                assert(result.login === user1.login);
                done();
            });
        });
    });

    it('should not save user without required fields', done => {
        userWithoutReqFields.save()
        User.findOne({ login: userWithoutReqFields.login }).then((result) => {
            assert(result === null);
            done();
        });
    });

});

describe('#find()', () => {

    beforeEach(done => addUsers(done));

    it('should find user with given login', done => {
        User.findOne({ login: user2Data.login }).then(result => {
            assert(result.login === user2Data.login);
            done();
        });
    });

    it('should find all users', done => {
        User.find({}).then(result => {
            assert(result.length === 2);
            done();
        });
    });

});

describe('#update()', () => {

    beforeEach(done => addUsers(done));

    it('should update users note', done => {
        let userQuery = { firstName: user2Data.firstName };
        let newNoteName = 'pikachu found';

        User.findOneAndUpdate(userQuery, {
            $set: { 'notes.0.noteName': newNoteName }
        }).then(() => {
            User.findOne(userQuery).then(result => {
                assert(result.notes[0].noteName === newNoteName);
                done();
            });
        });
    });

});

describe('#remove()', () => {

    beforeEach(done => addUsers(done));

    it('should remove users note', done => {
        let userQuery = { login: user1Data.login };
        let noteNameToRemove = note1.noteName;

        User.findOne(userQuery).then(result => {
            let filteredNotes = result.notes.filter(x => x.noteName !== noteNameToRemove);
            User.findOneAndUpdate(userQuery, {
                $set: { notes: filteredNotes }
            }).then(() => {
                User.findOne(userQuery).then(result => {
                    assert(result.notes.length === 1);
                    done();
                });
            });
        });
    });

    it('should remove users from db', done => {
        User.remove({ login: user1Data.login }).then(() => {
            User.remove({ login: user2Data.login }).then(() => {
                User.find({}).then((result) => {
                    assert(result.length === 0);
                    done();
                });
            });
        });
    });

});