import { combineReducers } from 'redux';
import signUp from './signUp';
import formValidation from './formValidation';


const rootReducer = combineReducers({
    signUp,
    formValidation
});

export default rootReducer;