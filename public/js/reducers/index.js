import { combineReducers } from 'redux';
import signUpMessage from './signUpMessage';
import loginMessage from './loginMessage';
import formValidation from './formValidation';
import fetchNotes from './fetchNotes';
import addNote from './addNote';
import notepad from './notepad';


const rootReducer = combineReducers({
    signUpMessage,
    loginMessage,
    formValidation,
    fetchNotes,
    addNote,
    notepad
});

export default rootReducer;