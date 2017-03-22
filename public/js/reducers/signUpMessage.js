import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from '../constants/actionTypes';


const signUpMessage = (state = '', action) => {
    let { type, message } = action;
    message = (message === undefined) ? state : message;

    switch (type) {
        case SIGNUP_SUCCESS:
            return message;      

        case SIGNUP_FAIL:
            return message;      

        default:
            return state;
    }
};

export default signUpMessage;