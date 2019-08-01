import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'



// STORE -> GLOBALIZED STATE
// stores all states, datas of application


// ACTION -> Kind of describes what you want to do
// Simple function that returns object
const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

// REDUCER -> Describes how your actions transforms the state into the next state

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1

        case 'DECREMENT':
            return state - 1
        default:
            break;
    }
}

let store = createStore(counter);

// Display it in the console.
store.subscribe(() => console.log(store.getState()));

// DISPATCH -> Actually execute that action
store.dispatch(increment())


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
