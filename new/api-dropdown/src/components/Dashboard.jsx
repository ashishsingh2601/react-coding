import useFetchData from "../hooks/use-fetch-data";
import { apiUrl } from "../constants/urls.js";
import { useState } from "react";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const data = useFetchData(apiUrl);
  const [selectedData, setSelectedData] = useState("");


  const handleSelectionChange = async (e) => {
    const { value } = e.target;

    // const category = value.split("-")[1].trim();
    // setIdOfSelected(parseInt(value.split("-")[0].trim()))
    // const selectedItemId = parseInt(value.split("-")[0].trim());

    // console.log("val", value, category)
    // const selectedItemName = data.products.find((ele) => ele.id === selectedItemId )

    setSelectedOption(value);

    const cachedData = localStorage.getItem(value);
    if (cachedData) {
      setSelectedData(JSON.parse(cachedData));
    } else {
      try {
        const response = await fetch(`${value}`);
        if (!response.ok) {
          throw new Error("Error while fetching");
        }

        const newData = await response.json();
        
        const {height, weight, base_experience, name} = newData

        setSelectedData(newData);
        localStorage.setItem(
          value,
          JSON.stringify({
            height, weight, base_experience, name
          })
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <main>
      <select
        value={selectedOption}
        onChange={handleSelectionChange}
        style={{ cursor: "pointer" }}
        className="selector"
      >
        <option value="" hidden className="option">
          Select an option
        </option>
        {data.results?.map((item, index) => {
          return (
            <option value={item.url} key={index + 1}>
              {item.name}
            </option>
          );
        })}
      </select>
      {selectedData && (
        <>
          <table className="table">
            <tr>
              <th>
                <strong>Name</strong>
              </th>
              <th>
                <strong>Height</strong>
              </th>
              <th>
                <strong>Weight</strong>
              </th>
              <th>
                <strong>Exprience</strong>
              </th>
            </tr>
            <tbody>
              <tr>
              <td>
                  <p>{selectedData.name}</p>
                </td>
                <td>
                  <p>{selectedData.height}</p>
                </td>
                <td>
                  <p>{selectedData.weight}</p>
                </td>
                <td>
                  <p>{selectedData.base_experience}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </main>
  );
};

export default Dashboard;
