import { FETCH_ALL_FAILED, FETCH_ALL_REQUESTED, FETCH_ALL_SUCCESS } from "./action-type-constants";

export const fetchUsersRequest = () => {
  return { type: FETCH_ALL_REQUESTED };
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_ALL_SUCCESS,
        payload: users,
    }
}
export const fetchUsersFailed = (error) => {
    return {
        type: FETCH_ALL_FAILED,
        payload: error.message,
    }
}