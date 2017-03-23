import {
    ADD_NOTE_SHOW_USER_CATEGORIES,
    ADD_NOTE_CURRENT_NEW_CATEGORY
} from '../constants/actionTypes';


let initialState = {
     addNewNoteCategory: false,
     currentNewCategory: ''
};

const addNote = (state = initialState, action) => {
    let { 
        type, 
        addNewNoteCategory,
        currentNewCategory
    } = action;

    switch (type) {
        case ADD_NOTE_SHOW_USER_CATEGORIES: 
            return { 
                ...state,
                addNewNoteCategory: !addNewNoteCategory
            };         

        case ADD_NOTE_CURRENT_NEW_CATEGORY:  
            return { 
                ...state,
                currentNewCategory
            };         

        default:
            return state;
    }
};

export default addNote;