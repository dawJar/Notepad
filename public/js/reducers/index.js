import { combineReducers } from 'redux';
import formValidation from './formValidation';
import signUpMessage from './signUpMessage';
import loginMessage from './loginMessage';
import fetchNotes from './fetchNotes';
import editNote from './editNote';
import addNote from './addNote';
import notepad from './notepad';


const rootReducer = combineReducers({
    formValidation,
    signUpMessage,
    loginMessage,
    fetchNotes,
    editNote,
    addNote,
    notepad
});

export default rootReducer;