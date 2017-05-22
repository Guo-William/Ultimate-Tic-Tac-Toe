import { connect } from 'react-redux';
import { Sector } from '../components/sector.js';
import { mark } from '../actions/index.js';


const mapStateToProps = (state) => {
    return {
        squares: state.squareStates
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (i, squareStates, xIsNext) => {
            dispatch(mark(i, squareStates, xIsNext));
        }
    };
};

export const SectorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sector);
