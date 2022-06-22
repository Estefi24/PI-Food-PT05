import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const composeEnhancers = (typeof window!== 'undefined' && window.__REDUX_DEVSTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
rootReducer,
composeEnhancers(applyMiddleware(thunk))
);
export default store;