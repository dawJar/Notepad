const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NoteSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    content: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: Number,
    todo: Boolean,
    category: String,
    importance: {
        type: String,
        default: 'success'
    }
});

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userNoteCategories: {
        type: Array,
        default: [ 'All' ]
    },
    notes: [ NoteSchema ]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;