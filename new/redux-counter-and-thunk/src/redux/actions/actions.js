import {
  DECREMENT,
  DECREMENT_BY_AMOUNT,
  INCREMENT,
  INCREMENT_BY_AMOUNT,
  DECREMENT_BURGER,
  DECREMENT_PIZZA,
  FETCH_ALL_FAILED,
  FETCH_ALL_REQUESTED,
  FETCH_ALL_SUCCESS
} from "./action-types";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const incrementByAmount = (data) => {
  return {
    type: INCREMENT_BY_AMOUNT,
    payload: data,
  };
};

export const decrementByAmount = (data) => {
  return {
    type: DECREMENT_BY_AMOUNT,
    payload: data,
  };
};

export const decrementPizzaCount = () => {
  return {
    type: DECREMENT_PIZZA,
  };
};

export const decrementBurgerCount = () => {
  return {
    type: DECREMENT_BURGER,
  };
};

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
