let initialArray = Array(9);
for (let x = 0; x < 9; x++) {
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
    let currentSector = currentSquaresSet[action.quadrant];

    const canMark = (state.currentSector !== 10 && state.currentSector !== action.quadrant);
    if (currentSector[action.i] || state.winner[action.quadrant] || state.finished || canMark) {
        return state;
    }

    currentSector[action.i] = state.xIsNext ? 'X' : 'O';
    currentSquaresSet[action.quadrant] = currentSector;
    const newHistory = ([...state.history]).concat({squaresSet: currentSquaresSet});

    const newWinner = [...state.winner];
    newWinner[action.quadrant] = calculateWinner(currentSector);

    let nextSector = action.i;
    if (newWinner[action.i] !== '') {
        nextSector = 10;
    }

    let isFinished = calculateWinner(newWinner);
    return {
        ...state,
        history: newHistory,
        stepNumber: state.stepNumber + 1,
        xIsNext: !state.xIsNext,
        winner: newWinner,
        currentSector: nextSector,
        finished: isFinished
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
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && validFilling) {
            return squares[a];
        }
    }

    let filled = true;
    squares.forEach((x) => (filled = filled && x));
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
