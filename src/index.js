
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { watchFetchDog } from './sagas/sagas';

import {Provider, connect} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga"
import { reducer } from './reducer/reducer';

//Составляем хранилище с помощью саг
//we compiling the storage using sagas
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

//ставим сагу на запуск включив в нее функцию контроля запуска саги watchFetchDog
//we put the saga on launch by including the saga launch control function watchFetchDog
sagaMiddleware.run(watchFetchDog);

const ConnectedApp = connect((state) => 
{
  return state;
})(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp/>
  </Provider>,
  document.getElementById('root')
);
