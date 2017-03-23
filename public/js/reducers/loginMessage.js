import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants/actionTypes';


let initState = {
    message: '',
    loginUser: false
}

const loginMessage = (state = initState, action) => {
    let { type, message, loginUser } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                message,
                loginUser
            };      

        case LOGIN_FAIL:
            return {
                message,
                loginUser
            };       

        default:
            return state;
    }
};

export default loginMessage;