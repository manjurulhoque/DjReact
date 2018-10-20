import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import reducer from './store/reducers/auth';
// import {createStore, compose, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import store from './store';

// const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, composeEnhances(
//     applyMiddleware(thunk)
// ));

const app = (
    <Provider store={store}><App/></Provider>
);


ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
