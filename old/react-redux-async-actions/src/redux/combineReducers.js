import {combineReducers} from "redux";
import fetchData from "./reducers/fetchDataReducer";

const rootReducer = combineReducers({
    fetchData
})

export default rootReducer;