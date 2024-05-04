const initialState = {
    users: []
}

const storeReducer = (state = initialState, actions) => {
    switch(actions.type){
        case "FETCH_USERS" : {
            return {
                ...state,
                users: actions.payload
            }
        }
        
        default:
            return state;
    }
}

export default storeReducer