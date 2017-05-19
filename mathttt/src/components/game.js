import React from 'react';
import PropTypes from 'prop-types';
import { Board } from './Board';

export class Game extends React.Component {
    render() {
        const history = this.props.history;
        const current = history[this.props.stepNumber];
        let color = '';
        let status;
        if (this.props.winner) {
            status = 'Winner: ' + this.props.winner;
            color = this.props.winner === 'X' ? 'game-board-red' : 'game-board-blue';
        }
        else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }

        return (
            <div className='game'>
                <div className={color}>
                    <div className='game-layout'>
                        <Board
                            squares={current.squares}
                            onClick={this.props.handleClick}
                        />
                        <Board
                            squares={current.squares}
                            onClick={this.props.handleClick}
                        />
                        <Board
                            squares={current.squares}
                            onClick={this.props.handleClick}
                        />
                    </div>
                    <div className='game-layout'>
                        <Board
                            squares={current.squares}
                            onClick={this.props.handleClick}
                        />
                        <Board
                            squares={current.squares}
                            onClick={this.props.handleClick}
                        />
                        <Board
                            squares={current.squares}
                            onClick={this.props.handleClick}
                        />
                    </div>
                    <div className='game-layout'>
                        <Board
                            squares={current.squares}
                            onClick={this.props.handleClick}
                        />
                        <Board
                            squares={current.squares}
                            onClick={this.props.handleClick}
                        />
                        <Board
                            squares={current.squares}
                            onClick={this.props.handleClick}
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
        squares: PropTypes.array.isRequired
    })).isRequired,
    stepNumber: PropTypes.number.isRequired,
    xIsNext: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    winner: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])

};
