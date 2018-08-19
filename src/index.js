import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./state/index";
import Home from "./views/home/home.container";
import initialState from "./state/initial-state";
import sagas from "./state/sagas-registration";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById("root")
);
