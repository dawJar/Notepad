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

// LOGIN
export const signUpSuccess = () => ({
    type: types.SIGNUP_SUCCESS
});

export const signUpFail = () => ({
    type: types.SIGNUP_SUCCESS,
});

export const attemptSingup = (firstName, login, password) => (dispatch) => {
    $.ajax({
        type: 'POST',
        url: '/signup',
        data: { firstName, login, password }})
        
        .done((data) => {
            if (data.error) {
                dispatch(signUpFail(data.error));
            } else {
                // console.log(data)
                dispatch(signUpSuccess(login));
            }
        })

        .fail(() => {
            dispatch(signUpFail(data.error));
        });
};

