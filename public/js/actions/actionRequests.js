import * as actions from './index';


export const attemptLoginRequest = (login, password, dispatch) => {
    $.ajax({
        type: 'POST',
        url: '/attempt-login',
        data: { login, password }
    })
        
        .done((data) => {
            let { isUserLoggedIn, message } = data;

            if (isUserLoggedIn) {
                dispatch(actions.loginSuccess(message, isUserLoggedIn));
                dispatch(actions.fetchUserNotes(0));
            } else {
                dispatch(actions.loginFail(message, isUserLoggedIn));
            }
        })

        .fail((data) => dispatch(actions.loginFail(data.error)));
};

export const attemptSingupRequest = (firstName, login, password, dispatch) => {
    $.ajax({
        type: 'POST',
        url: '/attempt-signup',
        data: { firstName, login, password }
    })
        
        .done((data) => {
            let { addedNewUser, message } = data;

            if (addedNewUser) {
                dispatch(actions.signUpSuccess(message, addedNewUser));
                dispatch(actions.fetchUserNotes(0));
            } else {
                dispatch(actions.signUpFail(message, addedNewUser));
            }
        })

        .fail((data) => dispatch(actions.signUpFail(data.error)));
};

export const fetchUserNotesRequest = (currentActiveCategoryTab, dispatch) => {
    $.ajax({
        type: 'POST',
        url: '/fetch-notes'
    })
        
        .done((data) => {
            let { login, notes, userNoteCategories } = data.userData;
            
            dispatch(actions.fetchUserNotesSuccess(login, notes, userNoteCategories));
            dispatch(actions.setActiveNotesOfCurrentCategory(currentActiveCategoryTab, notes, userNoteCategories))
        })

        .fail((data) => dispatch(actions.fetchUserNotesFail()));
};

export const addNewNoteRequest = (title, category, content, dispatch) => {
    $.ajax({
        type: 'POST',
        url: '/add-note',
        data: { title, category, content }
    })
        
        .done((data) => {
            let { login, notes, userNoteCategories } = data.userData;
            
            dispatch(actions.fetchUserNotesSuccess(login, notes, userNoteCategories));
        });
};

export const updateNoteImportanceRequest = (currentActiveCategoryTab, noteId, importance, dispatch) => {
    $.ajax({
        type: 'POST',
        url: '/update-note-importance',
        data: { noteId, importance }
    })
        
        .done((data) => {
            let { login, notes, userNoteCategories } = data.userData;
            
            dispatch(actions.fetchUserNotesSuccess(login, notes, userNoteCategories));
            dispatch(actions.setActiveNotesOfCurrentCategory(currentActiveCategoryTab, notes, userNoteCategories))
        });
};

export const removeNoteRequest = (currentActiveCategoryTab, noteId, dispatch) => {
    $.ajax({
        type: 'POST',
        url: '/remove-note',
        data: { noteId }
    })
        
        .done((data) => {
            let { login, notes, userNoteCategories } = data.userData;
            
            dispatch(actions.fetchUserNotesSuccess(login, notes, userNoteCategories));
            dispatch(actions.setActiveNotesOfCurrentCategory(currentActiveCategoryTab, notes, userNoteCategories))
        });
};

export const updateNoteRequest = (selectedNoteToEdit, currentTitleOfEdditingNote, currentContentOfEdditingNote, dispatch) => {
    $.ajax({
        type: 'POST',
        url: '/update-note',
        data: { 
            currentContentOfEdditingNote,
            currentTitleOfEdditingNote,
            selectedNoteToEdit
        }
    })
        
        .done((data) => {
            let { login, notes, userNoteCategories } = data.userData;
            
            dispatch(actions.fetchUserNotesSuccess(login, notes, userNoteCategories));
        });
};

export const logoutUserRequest = (dispatch) => {
    $.ajax({
        type: 'POST',
        url: '/logout-user',
    })
        
        .done(() => dispatch(actions.userLoggedOut()));
};