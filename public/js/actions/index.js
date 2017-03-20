import * as types from '../constants/actionTypes';


// export const increment = () => ({
//     type: types.INCREMENT
// });

// export const decrement = () => ({
//     type: types.DECREMENT
// });

// export const incrementIfOdd = () => (dispatch, getState) => {
//     let { counter } = getState();

//     if (counter % 2 === 0) return;

//     dispatch(increment());
// }

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
export const loginSuccess = (login) => ({
    type: types.LOGIN_SUCCESS,
    login
});

export const loginFail = (login) => ({
    type: types.LOGIN_SUCCESS,
});

// input validation
export const tooShortLogin = () => ({
    type: types.TOO_SHORT_LOGIN
});

export const tooShortPassword = () => ({
    type: types.TOO_SHORT_PASSWORD
});

export const attemptLogin = (firstName, login, password) => (dispatch) => {

    // if (login.length < 4) {
    //     dispatch(tooShortLogin());
    // } else if (password.length < 6) {
    //     dispatch(tooShortPassword());
    // } else {
        $.ajax({
            type: 'POST',
            url: '/login',
            data: { firstName, login, password }})
            
            .done((data) => {
                if (data.error) {
                    dispatch(loginFail(data.error));
                } else {
                    dispatch(loginSuccess(data));
                }
            })

            .fail(() => {
                dispatch(loginFail(data.error));
            });
    // }

};

