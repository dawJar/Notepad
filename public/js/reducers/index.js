import { combineReducers } from 'redux';
import signUpMessage from './signUpMessage';
import formValidation from './formValidation';


const rootReducer = combineReducers({
    signUpMessage,
    formValidation
});

export default rootReducer;