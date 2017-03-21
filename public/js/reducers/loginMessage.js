import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants/actionTypes';


const loginMessage = (state = '', action) => {
    let { type, message } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return message;      

        case LOGIN_FAIL:
            return message;      

        default:
            return state;
    }
};

export default loginMessage;