import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {combineReducers, createStore, applyMiddleware} from "redux";
import firstReducer from "./redux/reducer";
import sagaThrottle from "./redux/sagas";

// saga
import createSagaMiddleware from 'redux-saga'

const rootReducer = combineReducers({myFirstReducer: firstReducer})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagaThrottle)

// thunk
// import thunk from "redux-thunk";
// const rootReducer = combineReducers({myFirstReducer})
// const store = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
