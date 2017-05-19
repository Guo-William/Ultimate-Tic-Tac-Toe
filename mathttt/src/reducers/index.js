const initialState = {
    history: [
        {
            squares: Array(9).fill('')
        }
    ],
    stepNumber: 0,
    xIsNext: true,
    winner: null
};

function mark(state, action) {
    let currentSquares = state.history[state.history.length - 1].squares;
    if (currentSquares[action.i] || state.winner) {
        return state;
    }
    currentSquares[action.i] = state.xIsNext ? 'X' : 'O';
    const newHistory = [...history].concat({squares: currentSquares});
    return {
        ...state,
        history: newHistory,
        stepNumber: newHistory.length - 1,
        xIsNext: !state.xIsNext,
        winner: calculateWinner(currentSquares)
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
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export function app(state = initialState, action) {
    switch (action.type) {
        case 'MARK':
            return mark(state, action);
        default:
            return state;
    }
}
