import {
    USER_LOGGED_OUT,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants/actionTypes';


const initState = {
    message: '',
    isUserLoggedIn: false,
}

const loginMessage = (state = initState, action) => {
    let { type, message, isUserLoggedIn } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                message,
                isUserLoggedIn
            };      

        case LOGIN_FAIL:
            return {
                message,
                isUserLoggedIn
            };  

        case USER_LOGGED_OUT:
            return initState;

        default:
            return state;
            
    }
};

export default loginMessage;