import {
    FETCH_USERS_NOTES_SUCCESS,
    FETCH_USERS_NOTES_FAIL
} from '../constants/actionTypes';


let initialState = {
     anyNotes: false,
     notes: []
};

const fetchNotes = (state = initialState, action) => {
    let { type, anyNotes, notes } = action;

    switch (type) {
        case FETCH_USERS_NOTES_SUCCESS:  
            return { 
                anyNotes,
                notes
            };      

        case FETCH_USERS_NOTES_FAIL:
            return state;       

        default:
            return state;
    }
};

export default fetchNotes;