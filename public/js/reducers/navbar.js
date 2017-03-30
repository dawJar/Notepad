import {
    SET_NAV_STYLES,
    SET_CONTAINER_UNDER_NAV_STYLE
} from '../constants/actionTypes';


let initialState = {
     whichClassName: 'navbar-index-style',
     navbarTitle: 'Hello!',
     containerUnderNavStyle: 'container-under-nav'
};

const navbar = (state = initialState, action) => {
    let { 
        type, 
        whichClassName,
        navbarTitle,
        containerUnderNavStyle
    } = action;

    switch (type) {
        case SET_NAV_STYLES: 
            return { 
                ...state,
                whichClassName,
                navbarTitle
            };            

        case SET_CONTAINER_UNDER_NAV_STYLE:
            return {
                ...state,
                containerUnderNavStyle
            };

        default:
            return state;
    }
};

export default navbar;