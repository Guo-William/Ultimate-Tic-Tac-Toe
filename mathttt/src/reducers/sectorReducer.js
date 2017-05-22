import { MARK } from '../constants/actionTypes.js';

const handleClick = (i, squareStates, xIsNext) => {
    const squares = squareStates;
    squares[i] = xIsNext ? 'X' : 'O';
    return {
        squareStates: squares,
        xIsNext: !xIsNext
    };
};

const sectorReducer = (state = {}, action) => {
    switch (action.type) {
        case MARK:
            return {
                ...state,
                ...handleClick(state.i, state.squareStates, state.xIsNext)
            };
        default:
            return state;
    }
};

export default sectorReducer;
