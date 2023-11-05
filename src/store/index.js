import {combineReducers, createStore} from "redux";
import teaReducer from "./teaReducer";

const rootReducer = combineReducers({
    teas: teaReducer
})

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState)
};

export default configureStore;


