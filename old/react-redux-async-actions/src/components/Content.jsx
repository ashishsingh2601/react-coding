import React from "react";
import { useEffect } from "react";
import { fetchUsers } from "../redux/reducers/fetchDataReducer";
import { useSelector, useDispatch } from "react-redux";

const Content = () => {
  const data = useSelector((state) => state.fetchData);

  console.log(data);

  const { users, error, loading } = data;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users?.map((user) => {
        return (
          <section key={user.id}>
            <div>
              <span>{user.id}</span>
              {user.name}
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Content;
