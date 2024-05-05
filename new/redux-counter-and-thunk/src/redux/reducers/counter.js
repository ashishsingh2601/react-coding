import { DECREMENT, DECREMENT_BY_AMOUNT, INCREMENT, INCREMENT_BY_AMOUNT } from "../actions/action-types"

const initialState = {
    count: 0,
}

const counter = (state = initialState, actions) => {
    switch(actions.type){
        case INCREMENT: 
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT: 
            return {
                ...state,
                count: state.count > 0 ? state.count - 1 : 0
            }
        case INCREMENT_BY_AMOUNT: 
            return {
                ...state,
                count: state.count + actions.payload
            }
        case DECREMENT_BY_AMOUNT:
            return {
                ...state,
                count: state.count - actions.payload > 0 ? state.count - actions.payload : 0
            }
        default: 
            return state;
    }
}

export default counter;