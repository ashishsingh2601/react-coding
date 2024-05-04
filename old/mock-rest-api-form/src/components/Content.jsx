import React from "react";
import { useContext } from "react";
import { deleteData } from "../apis/formApis";
import { FormDataContext } from "../context/FormDataProvider";
import {url} from "../constants/constants"
import { useEffect, useState } from "react";


const Content = ({handleUpdateClick}) => {
  const { formDataValues } = useContext(FormDataContext);
    const [allData, setAllData] = useState(formDataValues);

    const handleDelete =  (id) => {
        deleteData(url, id)
    }

    useEffect(() => {
        setAllData(formDataValues);
    }, [formDataValues])


  return (
    <main className="content__container">
      {formDataValues.length === 0 && <p>No Data!</p>}
      <table className="table">
        <thead>
          <th>ID</th>
          <th>Username</th>
          <th>E-Mail</th>
          <th>Age</th>
        </thead>
        <tbody className="table__body">
          {allData?.map((data) => {
            return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.age}</td>
                  <button onClick={() => handleUpdateClick(data)}>Update</button>
                  <button onClick={() => handleDelete(data.id)}>Delete</button>
                </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default Content;
