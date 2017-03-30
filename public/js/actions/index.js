import * as types from '../constants/actionTypes';
import * as request from './actionRequests';


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
export const signUpSuccess = (message, addNewUser) => ({
    type: types.SIGNUP_SUCCESS,
    message,
    addNewUser
});

export const signUpFail = (message, addNewUser) => ({
    type: types.SIGNUP_SUCCESS,
    message,
    addNewUser
});

// LOGIN
export const loginSuccess = (message, isUserLoggedIn) => ({
    type: types.LOGIN_SUCCESS,
    message,
    isUserLoggedIn
});

export const loginFail = (message, isUserLoggedIn) => ({
    type: types.LOGIN_FAIL,
    message,
    isUserLoggedIn
});

export const userLoggedOut = () => ({
    type: types.USER_LOGGED_OUT
});

// ADD NEW NOTES
export const addNoteAddNewCategory = (addNewNoteCategory) => ({
    type: types.ADD_NOTE_SHOW_USER_CATEGORIES,
    addNewNoteCategory
});

export const addNoteCurrentNewCategory = (currentNewCategory) => ({
    type: types.ADD_NOTE_CURRENT_NEW_CATEGORY,
    currentNewCategory
});

export const addNoteCurrentTitle = (currentTitle) => ({
    type: types.ADD_NOTE_CURRENT_TITLE,
    currentTitle
});

export const addNoteContent = (addNewNoteContent) => ({
    type: types.ADD_NOTE_CONTENT,
    addNewNoteContent
});

export const addNoteSelectCategory = (addNewSelectedCategory) => ({
    type: types.ADD_NOTE_SELECT_CATEGORY,
    addNewSelectedCategory
});

// NOTEPAD
export const setActiveNotesOfCurrentCategory = (currentActiveCategoryTab, 
                                                userNotes, 
                                                userNoteCategories) => ({
    type: types.SET_ACTIVE_NOTES_OF_CURRENT_CATEGORY,
    currentActiveCategoryTab,
    userNotes,
    userNoteCategories
});

export const setActiveCategoryOfNotes = (currentActiveCategoryTab) => ({
    type: types.SET_ACTIVE_CATEGORY_OF_NOTES,
    currentActiveCategoryTab
});

// EDIT NOTE
export const setNoteToEdit = (selectedNoteToEdit) => ({
    type: types.SET_NOTE_TO_EDIT,
    selectedNoteToEdit
});

export const setContentOfEditingNote = (currentContentOfEdditingNote) => ({
    type: types.SET_CONTENT_OF_EDDITING_NOTE,
    currentContentOfEdditingNote
});

export const setTitleOfEditingNote = (currentTitleOfEdditingNote) => ({
    type: types.SET_TITLE_OF_EDDITING_NOTE,
    currentTitleOfEdditingNote
});

// NAVBAR STYLES
export const setNavStyles = (whichClassName, navbarTitle) => ({
    type: types.SET_NAV_STYLES,
    whichClassName,
    navbarTitle
});

// FETCH NOTES
export const fetchUserNotesSuccess = (login, notes, userNoteCategories) => ({
    type: types.FETCH_USER_NOTES_SUCCESS,
    login, 
    notes,
    userNoteCategories
});

export const fetchUserNotesFail = (anyNotes) => ({
    type: types.FETCH_USER_NOTES_FAIL
});

// REQESTS
// login
export const attemptLogin = (login, password) => (dispatch) => {
    request.attemptLoginRequest(login, password, dispatch);
};

export const attemptSingup = (firstName, login, password) => (dispatch) => {
    request.attemptSingupRequest(firstName, login, password, dispatch);
};

export const logoutUser = () => (dispatch) => {
    request.logoutUserRequest(dispatch);
};

export const fetchUserNotes = (currentActiveCategoryTab) => (dispatch) => {
    request.fetchUserNotesRequest(currentActiveCategoryTab, dispatch);
};

// notepad
export const addNewNote = (title, category, content) => (dispatch) => {
    request.addNewNoteRequest(title, category, content, dispatch);
};

export const updateNoteImportance = (currentActiveCategoryTab, 
                                        noteId, importance) => (dispatch) => {
    request.updateNoteImportanceRequest(currentActiveCategoryTab, 
                                        noteId, importance, dispatch);
};

export const removeNote = (currentActiveCategoryTab, noteId) => (dispatch) => {
    request.removeNoteRequest(currentActiveCategoryTab, noteId, dispatch);
};

export const updateNote = (selectedNoteToEdit, 
                            currentTitleOfEdditingNote, 
                            currentContentOfEdditingNote) => (dispatch) => {
    request.updateNoteRequest(selectedNoteToEdit, 
                                currentTitleOfEdditingNote, 
                                currentContentOfEdditingNote, 
                                dispatch);
};