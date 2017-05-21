import { connect } from 'react-redux';
import { Game } from '../components/Game';
import { mark } from '../actions/index';
const mapStateToProps = (state) => {
    return {
        history: state.history,
        stepNumber: state.stepNumber,
        xIsNext: state.xIsNext,
        winner: state.winner,
        currentSector: state.currentSector,
        finished: state.finished
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (quadrant, i) => {
            dispatch(mark(quadrant, i));
        }
    };
};

export const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
