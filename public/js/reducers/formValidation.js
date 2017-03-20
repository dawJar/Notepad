import {
    INPUT_FIRST_NAME_CHANGE,
    INPUT_LOGIN_CHANGE,
    INPUT_PASSWORD_CHANGE
} from '../constants/actionTypes';


let initialState = {
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

        default:
            return state;
    }
};

export default formValidation;