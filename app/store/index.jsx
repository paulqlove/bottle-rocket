import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { itemsFetchData } from '../components/actions/index.jsx';
import combineReducers from "../reducers/index.jsx";
import configureStore from './configureStore.jsx'


const defaultState = {
  items: (url) => dispatch(itemsFetchData(url))
}
const store = configureStore();

export default store;
