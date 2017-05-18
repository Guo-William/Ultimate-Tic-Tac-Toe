/* eslint-disable */
import React, { Component } from 'react';
import { Square } from './components/square';
import { GameContainer } from './containers/gameContainer';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <GameContainer/>
            </div>
        );
    }
}

export default App;
