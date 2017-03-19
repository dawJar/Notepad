import * as types from '../constants/actionTypes';


export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

export const incrementIfOdd = () => (dispatch, getState) => {
    let { counter } = getState();

    if (counter % 2 === 0) return;

    dispatch(increment());
}
