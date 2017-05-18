import React from 'react';
import { Game } from '../components/game.js';

export const GameContainer = () => {
    return (
        <Game />
    );
};

    // handleClick(i) {
    //     const history = this.state.history.slice(0, this.state.stepNumber + 1);
    //     const current = history[history.length - 1];
    //     const squares = current.squares.slice();
    //     if (calculateWinner(squares) || squares[i]) {
    //         return;
    //     }
    //     squares[i] = this.state.xIsNext ? "X" : "O";
    //     this.setState({
    //         history: history.concat([
    //             {
    //                 squares: squares
    //             }
    //         ]),
    //         stepNumber: history.length,
    //         xIsNext: !this.state.xIsNext
    //     });
    // }

    // jumpTo(step) {
    //   this.setState({
    //     stepNumber: step,
    //     xIsNext: step % 2 ? false : true
    //   });
    // }
