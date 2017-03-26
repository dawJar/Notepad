import {
    SET_ACTIVE_NOTES_OF_CURRENT_CATEGORY,
    SET_ACTIVE_CATEGORY_OF_NOTES
} from '../constants/actionTypes';


let initialState = {
     currentActiveCategoryTab: 0,
     notesOfCurrentActiveTab: [],
     dropdownSelectItems: ["Important", "Info", "Done", "Edit"]
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
            let notesOfCurrentActiveTab;
            if (currentActiveCategoryTab) {
                notesOfCurrentActiveTab = userNotes.filter(note => 
                                        note.category === nameOfActiveCategory);
            } else {
                notesOfCurrentActiveTab = userNotes;
            }
            
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