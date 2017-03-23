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
        url: '/fetch-notes'
        // data: {}
    })
        
        .done((data) => {
            let { 
                anyNotes, 
                notes,
                userNoteCategories 
            } = data;
            console.log(anyNotes, notes, userNoteCategories);
            if (anyNotes) {
                dispatch(actions.fetchUserNotesSuccess(anyNotes, notes, userNoteCategories));
            } else {
                dispatch(actions.fetchUserNotesSuccess(anyNotes, [], userNoteCategories));
            }
        })

        .fail((data) => {
            dispatch(actions.fetchUserNotesFail());
        });
};