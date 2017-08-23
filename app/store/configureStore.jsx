import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from '../reducers/index.jsx';
import { createLogger } from "redux-logger";

const logger = createLogger();


export default function configureStore(initialState) {
    return createStore(
        combineReducers,
        initialState,
        applyMiddleware(thunk, logger)
    );
}
