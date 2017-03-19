import {
    INCREMENT,
    DECREMENT,
    INCREMENT_IF_ODD
} from '../constants/actionTypes';


const counter = (state = 2, action) => {
    let { type, testAdd } = action;

    switch (type) {
        case INCREMENT:
            return state + 1;      

        case DECREMENT:
            return state - 1;      

        default:
            return state;
    }
};

export default counter;