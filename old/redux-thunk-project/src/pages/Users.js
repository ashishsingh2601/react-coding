import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/actionFactory";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log("users", users);
  return (
    <>
      {Array.isArray(users) &&
        users?.map((user) => {
          return (
            <div className="parent__container">
              <div className="container">
                <div className="item">{user.id}</div>
                <div className="item">{user.name}</div>
                <div className="item">{user.email}</div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Users;
