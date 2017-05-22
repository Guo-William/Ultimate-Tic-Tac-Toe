import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { tttApp } from './reducers'
import App from './App.js';
import app from './reducers/index';
import './index.css';
import { createStore } from 'redux';
import { app } from './reducers/index';
import { Provider } from 'react-redux';

let store = createStore(app);


let store = createStore(app);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
