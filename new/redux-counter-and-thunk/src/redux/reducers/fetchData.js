import { baseUrl } from "../../constants/constants";
import {
  FETCH_ALL_REQUESTED,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILED,
} from "../actions/action-types";
import { fetchUsersFailed, fetchUsersSuccess, fetchUsersRequest } from "../actions/actions";

const initState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = () => async (dispatch) => {
    dispatch(fetchUsersRequest());

    try{
        const reponse = await fetch(baseUrl);
        if(!reponse.ok){
            throw new Error("Something went wrong");
        }
        const data = await reponse.json();
        dispatch(fetchUsersSuccess(data));
    }catch(err){
        dispatch(fetchUsersFailed(err));
    }
}

const fetchData = (state = initState, actions) => {
    switch(actions.type){
        case FETCH_ALL_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case FETCH_ALL_FAILED:
            return {
                ...state,
                loading: false,
                users: [],
                error: actions.payload
            }
        case FETCH_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                users: actions.payload,
                error: ""
            }
        default: 
            return state;
    }
}

export default fetchData;