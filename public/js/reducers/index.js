import { combineReducers } from 'redux';
import signUpMessage from './signUpMessage';
import loginMessage from './loginMessage';
import formValidation from './formValidation';
import fetchNotes from './fetchNotes';
import addNote from './addNote';


const rootReducer = combineReducers({
    signUpMessage,
    loginMessage,
    formValidation,
    fetchNotes,
    addNote
});

export default rootReducer;