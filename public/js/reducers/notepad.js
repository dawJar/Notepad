import {
    SET_ACTIVE_NOTES_OF_CURRENT_CATEGORY,
    SET_ACTIVE_CATEGORY_OF_NOTES
} from '../constants/actionTypes';


let initialState = {
     currentActiveCategoryTab: 0,
     notesOfCurrentActiveTab: []
};

const notepad = (state = initialState, action) => {
    let { 
        type, 
        userNotes,
        currentActiveCategoryTab,
        userNoteCategories
    } = action;
    
    switch (type) {
        case SET_ACTIVE_NOTES_OF_CURRENT_CATEGORY: 
            let nameOfActiveCategory = userNoteCategories[currentActiveCategoryTab];
            let notesOfCurrentActiveTab = userNotes.filter(note => 
                                        note.category === nameOfActiveCategory);
            return { 
                ...state,
                currentActiveCategoryTab,
                notesOfCurrentActiveTab
            };

        case SET_ACTIVE_CATEGORY_OF_NOTES:
            return {
                ...state,
                currentActiveCategoryTab
            }    

        default:
            return state;
    }
};

export default notepad;