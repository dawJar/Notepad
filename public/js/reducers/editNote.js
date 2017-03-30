import {
    SET_NOTE_TO_EDIT,
    SET_CONTENT_OF_EDDITING_NOTE,
    SET_TITLE_OF_EDDITING_NOTE
} from '../constants/actionTypes';


let initialState = {
     currentContentOfEdditingNote: '',
     currentTitleOfEdditingNote: '',
     selectedNoteToEdit: ''
};

const editNote = (state = initialState, action) => {
    let { 
        type,
        selectedNoteToEdit,
        currentTitleOfEdditingNote,
        currentContentOfEdditingNote
    } = action;

    switch (type) {
        case SET_NOTE_TO_EDIT:
            return { 
                ...state,
                selectedNoteToEdit
            };         

        case SET_CONTENT_OF_EDDITING_NOTE:  
            return { 
                ...state,
                currentContentOfEdditingNote
            };         

        case SET_TITLE_OF_EDDITING_NOTE:  
            return { 
                ...state,
                currentTitleOfEdditingNote
            };         

        default:
            return state;
            
    }
};

export default editNote;