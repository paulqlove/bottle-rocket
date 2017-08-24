import {combineReducers } from "redux";
import { items, itemsHasErrored, itemsIsLoading, showBackBtn } from "./items.jsx";


export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    showBackBtn
});
