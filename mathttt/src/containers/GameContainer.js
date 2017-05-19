import { connect } from 'react-redux';
import { Game } from '../components/Game';
import { mark } from '../actions/index';
const mapStateToProps = (state) => {
    return {
        history: state.history,
        stepNumber: state.stepNumber,
        xIsNext: state.xIsNext,
        winner: state.winner
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (i) => {
            dispatch(mark(i));
        }
    };
};

export const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
