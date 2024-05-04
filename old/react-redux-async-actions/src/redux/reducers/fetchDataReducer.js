import { baseUrl } from "../../constants/constants";
import {
  FETCH_ALL_REQUESTED,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILED,
} from "../actions/action-type-constants";
import { fetchUsersFailed, fetchUsersSuccess, fetchUsersRequest } from "../actions/actions";

const initState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();

    dispatch(fetchUsersSuccess(data));
  } catch (err) {
    dispatch(fetchUsersFailed(err));
  }
};

const fetchData = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ALL_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_ALL_FAILED:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchData;
