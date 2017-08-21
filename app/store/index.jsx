import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import rootReducer from "../reducers/index.jsx";

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default store;
