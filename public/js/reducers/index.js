import { combineReducers } from 'redux';
import login from './login';
import formValidation from './formValidation';


const rootReducer = combineReducers({
    login,
    formValidation
});

export default rootReducer;