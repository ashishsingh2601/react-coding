import { combineReducers } from "redux";
import counter from "./counter";
import pizza from "./pizza";
import burger from "./burger";
import fetchData from "./fetchData";

const rootReducer = combineReducers({
    counter,
    pizza,
    burger,
    fetchData
})

export default rootReducer;