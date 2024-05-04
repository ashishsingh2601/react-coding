import {applyMiddleware, legacy_createStore as createStore} from "redux"
import {thunk} from "redux-thunk";
import storeReducer from "../reducers/storeReducer";

export const store = createStore(storeReducer, applyMiddleware(thunk));
