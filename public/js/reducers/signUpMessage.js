import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from '../constants/actionTypes';


const initialState = {
    message: '',
    addNewUser: false
}

const signUpMessage = (state = initialState, action) => {
    let { type, message, addNewUser } = action;
    // message = (message === undefined) ? state : message;

    switch (type) {
        case SIGNUP_SUCCESS:
            return {
                message,
                addNewUser
            };      

        case SIGNUP_FAIL:
            return {
                message,
                addNewUser
            };       

        default:
            return state;
    }
};

export default signUpMessage;