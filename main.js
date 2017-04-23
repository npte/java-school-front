/** Created by batmah on 16.10.16. */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import app from './reducer';

const reducer = combineReducers({ app });

const store = createStore(reducer);

import App from './App';

ReactDOM.render(<Provider store={store}><App target="react" /></Provider>, document.getElementById('app'));

store.subscribe ( () => console.log(store.getState()))

store.dispatch( {
    type: 'SET'
})