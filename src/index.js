import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from './store/reducers'
import watchers from './store/sagas'
import createSageMiddleware from 'redux-saga'

const saga = createSageMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(saga)
);

saga.run(watchers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
