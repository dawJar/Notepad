import {
    FETCH_USER_NOTES_SUCCESS,
    FETCH_USER_NOTES_FAIL
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