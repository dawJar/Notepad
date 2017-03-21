import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from '../constants/actionTypes';


const signUp = (state = '', action) => {
    let { type, signUp } = action;

    switch (type) {
        case SIGNUP_SUCCESS:
            return 'Sing up success';      

        case SIGNUP_FAIL:
            return 'Sign up fail';      

        default:
            return state;
    }
};

export default signUp;