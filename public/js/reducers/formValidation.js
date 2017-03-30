import {
    INPUT_FIRST_NAME_CHANGE,
    INPUT_LOGIN_CHANGE,
    INPUT_PASSWORD_CHANGE,
    USER_LOGGED_OUT
} from '../constants/actionTypes';


const initialState = {
     firstName: '',
     login: '',
     password: ''
};

const formValidation = (state = initialState, action) => {
    let { type, firstName, login, password } = action;

    switch (type) {
        case INPUT_FIRST_NAME_CHANGE:  
            return { 
                ...state,
                firstName
            };      

        case INPUT_LOGIN_CHANGE:
            return { 
                ...state,
                login
            };            

        case INPUT_PASSWORD_CHANGE:
            return { 
                ...state,
                password
            }; 

        case USER_LOGGED_OUT:
            return initialState;          

        default:
            return state;
            
    }
};

export default formValidation;