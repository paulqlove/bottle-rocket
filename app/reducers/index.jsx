import {combineReducers } from "redux";

const rootReducer = combineReducers({
    test: (state = "Nothing has happened yet", action) => {
        switch (action.type) {
        case "TEST":
            return "It happened!";
        default:
            return state;
        }
    }
});

export default rootReducer;
