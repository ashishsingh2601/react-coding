import { FETCH_USERS } from "./actionConstants";

export const fetchUsers = () => async (dispatch, getState) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();


    dispatch({ type: FETCH_USERS, payload: data });
  } catch (err) {
    throw new Error(err);
  }
};
