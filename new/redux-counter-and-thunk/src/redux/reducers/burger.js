import { DECREMENT, DECREMENT_BURGER, DECREMENT_BY_AMOUNT, INCREMENT, INCREMENT_BY_AMOUNT, DECREMENT_PIZZA } from "../actions/action-types"

const initialState = {
    burgers: 80,
}

const burger = (state = initialState, actions) => {
    switch(actions.type){
        case INCREMENT: 
            return {
                ...state,
                burgers: state.burgers + 1
            }
        case DECREMENT_BURGER: 
            return {
                ...state,
                burgers: state.burgers > 0 ? state.burgers - 1 : 0
            }
        case DECREMENT_PIZZA: 
            return {
                ...state,
                burgers: state.burgers > 0 ? state.burgers - 1 : 0
            }
        default: 
            return state;
    }
}

export default burger;