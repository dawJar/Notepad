import { combineReducers } from 'redux';
import signUpMessage from './signUpMessage';
import loginMessage from './loginMessage';
import formValidation from './formValidation';


const rootReducer = combineReducers({
    signUpMessage,
    loginMessage,
    formValidation
});

export default rootReducer;