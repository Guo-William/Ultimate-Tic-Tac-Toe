let initialArray = Array(9);
for (var x = 0; x < 9; x++) {
    initialArray[x] = Array(9).fill('');
}

const initialState = {
    history: [
        {
            squaresSet: initialArray
        }
    ],
    stepNumber: 0,
    xIsNext: true,
    winner: Array(9).fill(''),
    currentSector: 10,
    finished: false
};

function mark(state, action) {
    let currentSquaresSet = [...(state.history[state.stepNumber].squaresSet)];
    let currentSquares = currentSquaresSet[action.quadrant];

    const canMark = (state.currentSector !== 10 && state.currentSector !== action.quadrant);
    if (currentSquares[action.i] || state.winner[action.quadrant] || state.finished || canMark) {
        return state;
    }

    currentSquares[action.i] = state.xIsNext ? 'X' : 'O';
    currentSquaresSet[action.quadrant] = currentSquares;
    const newHistory = ([...state.history]).concat({squaresSet: currentSquaresSet});

    const newWinner = [...state.winner];
    newWinner[action.quadrant] = calculateWinner(currentSquares);

    let newSector = action.i;
    if (newWinner[action.i] !== '') {
        newSector = 10;
    }

    let newFinished = calculateWinner(newWinner);

    return {
        ...state,
        history: newHistory,
        stepNumber: state.stepNumber + 1,
        xIsNext: !state.xIsNext,
        winner: newWinner,
        currentSector: newSector,
        finished: newFinished
    };
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        const validFilling = squares[a] !== '' && squares[a] !== 'T';
        if (squares[a] && validFilling && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    let filled = true;
    for (let cs = 0; cs < squares.length; cs++ ) {
        filled = filled && squares[cs];
    }

    if (filled) {
        return 'T';
    }

    return '';
}

export function app(state = initialState, action) {
    switch (action.type) {
        case 'MARK':
            return mark(state, action);
        default:
            return state;
    }
}
