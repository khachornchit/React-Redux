import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {combineReducers, createStore, applyMiddleware} from "redux";
import usersReducer from "./redux/reducer";
import sagaThrottle from "./redux/sagas";

// saga
import createSagaMiddleware from 'redux-saga'

const rootReducer = combineReducers({usersReducer: usersReducer})
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
