import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/reducers/fetchData";

const FetchUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.fetchData);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(users);

  return (
    <main>
      {users.loading && <p>Loading...</p>}
      {users?.users &&
        users?.users?.map((user, index) => {
          return <div key={index}>{user.name}</div>;
        })}
    </main>
  );
};

export default FetchUsers;
