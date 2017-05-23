import React from 'react';
import PropTypes from 'prop-types';
import { Board } from './Board';

export class Game extends React.Component {
    render() {
        const current = this.props.history[this.props.stepNumber];
        const currentSquaresSet = current.squaresSet;
        let status;
        let tied = true;
        let columns = [];

        if (this.props.finished === 'X' || this.props.finished === 'O') {
            status = 'Winner: ' + this.props.finished;
        }
        else if (this.props.winner.forEach(x => tied && x)) {
            status = 'Game is TIED';
        }
        else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }

        const oneBoard = (x) => (
            <div className={`game-board-${this.props.winner[x]} game-board-${this.props.currentSector === x ? 'current' : ''}`}>
                <Board
                    squares={currentSquaresSet[x]}
                    onClick={this.props.handleClick}
                    quadrant={x}
                />
            </div>
        );

        const oneColumn = (x) => (
            <div key ={x} className='game-layout'>
                {oneBoard(x)}
                {oneBoard(x + 3)}
                {oneBoard(x + 6)}
            </div>
        );

        for (let x = 0; x < 3; x++) {
            columns.push(oneColumn(x));
        }

        return (
            <div className='game'>
                {columns}
                <div className='game-info'>
                    <div>{status}</div>
                </div>
            </div>
        );
    }
}

Game.propTypes = {
    history: PropTypes.arrayOf(PropTypes.shape({
        squaresSet: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
    })).isRequired,
    stepNumber: PropTypes.number.isRequired,
    xIsNext: PropTypes.bool.isRequired,
    winner: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClick: PropTypes.func.isRequired,
    currentSector: PropTypes.number.isRequired,
    finished: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ])
};
