import {
    FETCH_USER_NOTES_SUCCESS,
    FETCH_USER_NOTES_FAIL,
    USER_LOGGED_OUT
} from '../constants/actionTypes';


const initialState = {
    anyNotes: false,
    notes: [],
    userNoteCategories: [],
    defaultCategories: [ 'Todo', 'Shopping', 'Events' ],
    concatedCategories: [],
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
            let { defaultCategories } = state;

            let anyNotes = notes.length !== 0;
            let userLogin = login;

            let allCategories = [ ...defaultCategories, ...userNoteCategories ];
            let removeAllFromCategories = allCategories.filter(cat => cat !== 'All');
            let filterForUniqueCategories = new Set([ ...removeAllFromCategories ]);
            let concatedCategories = Array.from(filterForUniqueCategories);
            console.log('userLogin', userLogin)
            return { 
                ...state,
                userLogin,
                anyNotes,
                notes,
                userNoteCategories,
                concatedCategories
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