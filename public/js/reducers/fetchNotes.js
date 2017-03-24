import {
    FETCH_USER_NOTES_SUCCESS,
    FETCH_USER_NOTES_FAIL,
    SET_ACTIVE_CATEGORY_OF_NOTES
} from '../constants/actionTypes';


let initialState = {
     anyNotes: false,
     notes: [],
     userNoteCategories: []
};

const fetchNotes = (state = initialState, action) => {
    let { 
        type, 
        anyNotes, 
        notes, 
        userNoteCategories 
    } = action;
    
    switch (type) {
        case FETCH_USER_NOTES_SUCCESS:  
            return { 
                ...state,
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