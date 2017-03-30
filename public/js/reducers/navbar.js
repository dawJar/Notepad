import {
    SET_NAV_STYLES
} from '../constants/actionTypes';


let initialState = {
     whichClassName: 'navbar-index-style',
     navbarTitle: 'Hello!'
};

const navbar = (state = initialState, action) => {
    let { 
        type, 
        whichClassName,
        navbarTitle
    } = action;

    switch (type) {
        case SET_NAV_STYLES: 
            return { 
                ...state,
                whichClassName,
                navbarTitle
            };            

        default:
            return state;
    }
};

export default navbar;