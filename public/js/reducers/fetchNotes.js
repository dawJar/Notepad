import {
    FETCH_USER_NOTES_SUCCESS,
    FETCH_USER_NOTES_FAIL,
    USER_LOGGED_OUT
} from '../constants/actionTypes';


const initialState = {
    anyNotes: false,
    notes: [],
    userNoteCategories: [],
    userLogin: ''
};

const fetchNotes = (state = initialState, action) => {
    let { 
        type, 
        login, 
        anyNotes, 
        notes, 
        userNoteCategories 
    } = action;
    
    switch (type) {
        case FETCH_USER_NOTES_SUCCESS: 
            let anyNotes = notes.length !== 0;
            let userLogin = login;
            return { 
                ...state,
                userLogin,
                anyNotes,
                notes,
                userNoteCategories
            };      

        case FETCH_USER_NOTES_FAIL:
            return state;  

        case USER_LOGGED_OUT:
            return initialState;  

        default:
            return state;
    }
};

export default fetchNotes;