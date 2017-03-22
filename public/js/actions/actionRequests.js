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

// export const getUsersNotepadRequest = () => {
//     $.ajax({
//         type: 'GET',
//         url: 'notepad'
//         // data: { firstName, login, password }
//     })
        
//         // .done((data) => {
//         //     if (data.addedNewUser) {
//         //         dispatch(actions.signUpSuccess(data.message));
//         //     } else {
//         //         dispatch(actions.signUpFail(data.message));
//         //     }
//         // })

//         // .fail((data) => {
//         //     dispatch(actions.signUpFail(data.error));
//         // });
// };

// export const fetchUserNotesRequest = () => {
//     $.ajax({
//         type: 'POST',
//         url: '/notepad',
//         // data: { firstName, login, password }
//     })
        
//         .done((data) => {
//             if (data.addedNewUser) {
//                 dispatch(actions.fetchUsersNoteSuccess(data.message));
//             } else {
//                 dispatch(actions.fetchUsersNoteFail(data.message));
//             }
//         })

//         .fail((data) => {
//             dispatch(actions.fetchUsersNoteFail(data.error));
//         });
// };