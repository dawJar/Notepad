import {
    ADD_NOTE_SHOW_USER_CATEGORIES,
    ADD_NOTE_CURRENT_NEW_CATEGORY,
    ADD_NOTE_CONTENT,
    ADD_NOTE_SELECT_CATEGORY
} from '../constants/actionTypes';


let initialState = {
     addNewNoteCategory: false,
     currentNewCategory: '',
     addNewNoteContent: '',
     addNewSelectedCategory: 'All'
};

const addNote = (state = initialState, action) => {
    let { 
        type, 
        addNewNoteCategory,
        currentNewCategory,
        addNewNoteContent,
        addNewSelectedCategory
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

        case ADD_NOTE_CONTENT:  
            return { 
                ...state,
                addNewNoteContent
            };         

        case ADD_NOTE_SELECT_CATEGORY:  
            return { 
                ...state,
                addNewSelectedCategory
            };         

        default:
            return state;
    }
};

export default addNote;