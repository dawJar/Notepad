import {
    FETCH_USER_NOTES_SUCCESS,
    FETCH_USER_NOTES_FAIL,
    SET_ACTIVE_NOTES_OF_CURRENT_CATEGORY
} from '../constants/actionTypes';


let initialState = {
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

        default:
            return state;
    }
};

export default fetchNotes;