import React from 'react';
import PropTypes from 'prop-types';
import { Board } from './Board';

export class Game extends React.Component {
    render() {
        const current = this.props.history[this.props.stepNumber];
        const currentSquaresSet = current.squaresSet;
        let status;
        if (this.props.finished === 'X' || this.props.finished === 'O') {
            status = 'Winner: ' + this.props.finished;
        }
        else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }
        return (
            <div className='game'>
                <div className='game-layout'>
                    <div className={`game-board-${this.props.winner[0]}`}>
                        <Board
                            squares={currentSquaresSet[0]}
                            onClick={this.props.handleClick}
                            quadrant={0}
                        />
                    </div>
                    <div className={`game-board-${this.props.winner[3]}`}>
                        <Board
                            squares={currentSquaresSet[3]}
                            onClick={this.props.handleClick}
                            quadrant={3}
                        />
                    </div>
                    <div className={`game-board-${this.props.winner[6]}`}>
                        <Board
                            squares={currentSquaresSet[6]}
                            onClick={this.props.handleClick}
                            quadrant={6}
                        />
                    </div>
                </div>
                <div className='game-layout'>
                    <div className={`game-board-${this.props.winner[1]}`}>
                        <Board
                            squares={currentSquaresSet[1]}
                            onClick={this.props.handleClick}
                            quadrant={1}
                        />
                    </div>
                    <div className={`game-board-${this.props.winner[4]}`}>
                        <Board
                            squares={currentSquaresSet[4]}
                            onClick={this.props.handleClick}
                            quadrant={4}
                        />
                    </div>
                    <div className={`game-board-${this.props.winner[7]}`}>
                        <Board
                            squares={currentSquaresSet[7]}
                            onClick={this.props.handleClick}
                            quadrant={7}
                        />
                    </div>
                </div>
                <div className='game-layout'>
                    <div className={`game-board-${this.props.winner[2]}`}>
                        <Board
                            squares={currentSquaresSet[2]}
                            onClick={this.props.handleClick}
                            quadrant={2}
                        />
                    </div>
                    <div className={`game-board-${this.props.winner[5]}`}>
                        <Board
                            squares={currentSquaresSet[5]}
                            onClick={this.props.handleClick}
                            quadrant={5}
                        />
                    </div>
                    <div className={`game-board-${this.props.winner[8]}`}>
                        <Board
                            squares={currentSquaresSet[8]}
                            onClick={this.props.handleClick}
                            quadrant={8}
                        />
                    </div>
                </div>
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
        PropTypes.object
    ])
};
