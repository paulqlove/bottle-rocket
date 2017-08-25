import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from '../reducers/index.jsx';
import { createLogger } from "redux-logger";
const middleware = [ thunk ];
// if (process.env.NODE_ENV !== 'production') {
// }
middleware.push(createLogger());
// const logger = createLogger();


export default function configureStore(initialState) {
    return createStore(
        combineReducers,
        initialState,
        applyMiddleware(...middleware)
    );
}
