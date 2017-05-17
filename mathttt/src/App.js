import React, { Component } from 'react';
import { Game } from './containers/gameContainer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Game />
      </div>
    );
  }
}

export default App;
