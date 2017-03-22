import * as actions from './index';


export const attemptLoginRequest = (login, password, dispatch) => {
    $.ajax({
        type: 'POST',
        url: '/login',
        data: { login, password }
    })
        
        .done((data) => {
            let { loginUser, message } = data;
            console.log('action req login: ', loginUser);

            if (loginUser) {
                dispatch(actions.loginSuccess(message, loginUser));
                // getUsersNotepadRequest();
            } else {
                dispatch(actions.loginFail(message, loginUser));
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
        data: { firstName, login, password }
    })
        
        .done((data) => {
            let { addedNewUser, message } = data;

            if (addedNewUser) {
                dispatch(actions.signUpSuccess(message, addedNewUser));
            } else {
                dispatch(actions.signUpFail(message, addedNewUser));
            }
        })

        .fail((data) => {
            dispatch(actions.signUpFail(data.error));
        });
};

export const fetchUserNotesRequest = (dispatch) => {
    $.ajax({
        type: 'POST',
        url: '/notepad',
    })
        
        .done((data) => {
            let { anyNotes, notes } = data;

            if (anyNotes) {
                dispatch(actions.fetchUsersNotesSuccess(anyNotes, notes));
            } else {
                dispatch(actions.fetchUsersNotesSuccess(anyNotes, []));
            }
        })

        .fail((data) => {
            dispatch(actions.fetchUserssNoteFail());
        });
};