import * as types from '../constants/actionTypes';


// FORM
export const inputFirstNameChange = (firstName) => ({
    type: types.INPUT_FIRST_NAME_CHANGE,
    firstName
});

export const inputLoginChange = (login) => ({
    type: types.INPUT_LOGIN_CHANGE,
    login
});

export const inputPasswordChange = (password) => ({
    type: types.INPUT_PASSWORD_CHANGE,
    password
});

// SIGN UP
export const signUpSuccess = (message) => ({
    type: types.SIGNUP_SUCCESS,
    message
});

export const signUpFail = (message) => ({
    type: types.SIGNUP_SUCCESS,
    message
});

export const attemptSingup = (firstName, login, password) => (dispatch) => {
    $.ajax({
        type: 'POST',
        url: '/signup',
        data: { firstName, login, password }})
        
        .done((data) => {
            if (data.addedNewUser) {
                dispatch(signUpSuccess(data.message));
            } else {
                dispatch(signUpFail(data.message));
            }
        })

        .fail((data) => {
            dispatch(signUpFail(data.error));
        });
};

