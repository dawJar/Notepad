import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants/actionTypes';


const login = (state = '', action) => {
    let { type, login } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return login;      

        case LOGIN_FAIL:
            return '?';      

        default:
            return state;
    }
};

export default login;