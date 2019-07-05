import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import SelectComponent from './Component/Select-component';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux'
import * as serviceWorker from './serviceWorker';
import {reducerState} from './Reducers/NewsReducer';
import {watchNewsRequest} from './sagas/saga';
import ShowNews from  './Component/ShowNews'


const sagaMiddleWare= createSagaMiddleware()
const store=createStore(reducerState,applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(watchNewsRequest)

console.log('store ry',store.getState())
ReactDOM.render(<Provider store={store}><App/><ShowNews/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
