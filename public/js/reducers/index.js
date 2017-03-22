import { combineReducers } from 'redux';
import signUpMessage from './signUpMessage';
import loginMessage from './loginMessage';
import formValidation from './formValidation';
import fetchNotes from './fetchNotes';


const rootReducer = combineReducers({
    signUpMessage,
    loginMessage,
    formValidation,
    fetchNotes
});

export default rootReducer;