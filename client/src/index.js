import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


import App from './App';

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './store/reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, /* preloadedState, */ composeEnhancers(
        applyMiddleware(thunk)
    )
)

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
