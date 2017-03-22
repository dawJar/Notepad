import * as actions from './index';


export const attemptLoginRequest = (login, password, dispatch) => {
    $.ajax({
        type: 'POST',
        url: '/login',
        data: { login, password }})
        
        .done((data) => {
            if (data.loginUser) {
                dispatch(actions.loginSuccess(data.message));
            } else {
                dispatch(actions.loginFail(data.message));
            }
        })

        .fail((data) => {
            dispatch(actions.loginFail(data.error));
        });
};

export const attemptSingupRequest = (firstName, login, password, dispatch) => {
    $.ajax({
        type: 'POST',
        url: '/signup',
        data: { firstName, login, password }})
        
        .done((data) => {
            if (data.addedNewUser) {
                dispatch(actions.signUpSuccess(data.message));
            } else {
                dispatch(actions.signUpFail(data.message));
            }
        })

        .fail((data) => {
            dispatch(actions.signUpFail(data.error));
        });
};