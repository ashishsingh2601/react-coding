import { DECREMENT, DECREMENT_BY_AMOUNT, DECREMENT_PIZZA, INCREMENT, INCREMENT_BY_AMOUNT } from "../actions/action-types"

const initialState = {
    pizzas: 100,
}

const pizza = (state = initialState, actions) => {
    switch(actions.type){
        case INCREMENT: 
            return {
                ...state,
                pizzas: state.pizzas + 1
            }
        case DECREMENT_PIZZA: 
            return {
                ...state,
                pizzas: state.pizzas > 0 ? state.pizzas - 1 : 0
            }
        default: 
            return state;
    }
}

export default pizza;