import * as actions from '../constants/actionTypes.js';

export const mark = (i, squareStates, xIsNext) => ({
    type: actions.MARK,
    i: i,
    squareStates: squareStates,
    xIsNext: xIsNext

});
