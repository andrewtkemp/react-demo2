import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose} from "redux";
import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";
import reducers from "reducers";

export default ({children, initialState = {}}) => {
    const store = createStore(reducers, initialState, compose(
        applyMiddleware(async, stateValidator),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ))
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}