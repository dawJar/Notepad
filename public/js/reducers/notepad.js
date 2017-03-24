// import {
//     SET_ACTIVE_CATEGORY_OF_NOTES
// } from '../constants/actionTypes';


// let initialState = {
//      currentActiveCategoryTab: 0,
//      notesOfCurrentActiveTab: []
// };

// const notepad = (state = initialState, action) => {
//     let { 
//         type, 
//         allNotes, 
//         currentActiveCategoryTab
//     } = action;
    
//     switch (type) {
//         case SET_ACTIVE_CATEGORY_OF_NOTES: 

//             return { 
//                 ...state,
//                 currentActiveCategoryTab,
//                 notesOfCurrentActiveTab
//             };      

//         default:
//             return state;
//     }
// };

// export default notepad;