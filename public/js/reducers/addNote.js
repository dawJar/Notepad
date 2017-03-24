import {
    ADD_NOTE_SHOW_USER_CATEGORIES,
    ADD_NOTE_CURRENT_NEW_CATEGORY,
    ADD_NOTE_CONTENT,
    ADD_NOTE_SELECT_CATEGORY,
    ADD_NOTE_CURRENT_TITLE
} from '../constants/actionTypes';


let initialState = {
     addNewNoteCategory: false,
     currentNewCategory: '',
     addNewNoteContent: '',
     addNewSelectedCategory: 'All',
     currentTitle: ''
};

const addNote = (state = initialState, action) => {
    let { 
        type, 
        addNewNoteCategory,
        currentNewCategory,
        currentTitle,
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

        case ADD_NOTE_CURRENT_TITLE:  
            return { 
                ...state,
                currentTitle
            };         

        default:
            return state;
    }
};

export default addNote;