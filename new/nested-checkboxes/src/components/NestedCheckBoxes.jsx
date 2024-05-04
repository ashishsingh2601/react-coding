import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { data } from "../data/data";

const NestedCheckBoxes = ({ items }) => {
  const [nestedData, setNestedData] = useState(items || data);
  const [isClicked, setIsClicked] = useState(false);
  const [dataArr, setDataArr] = useState([]);
  const [dataList, setDataList] = useState(dataArr || []);

  const handleClick = (id, name) => {
    const dataItem = { id, name };
    setIsClicked(!isClicked);

    setDataArr((dataArr) => {
      return [...dataArr, dataItem];
    });
    setDataList((dataList) => {
        return [...dataList, dataItem];
      });
  };

  useEffect(() => {
    console.log(dataList);
  }, [dataList]);

  return (
    <>
      <>
        <div className="checkbox_container">
          <input
            type="checkbox"
            id="checkbox"
            aria-labelledby="checkbox_label"
            onClick={() => handleClick(nestedData.id, nestedData.name)}
          />
          <label htmlFor="checkbox" id="checkbox_label">
            {nestedData.name}
          </label>
        </div>
        {isClicked && (
          <div className="checkbox_container" style={{ paddingLeft: "15px" }}>
            {nestedData?.items?.map((item, index) => {
              return <NestedCheckBoxes items={item} key={index} />;
            })}
          </div>
        )}
      </>
      <div>
        {/* Render the selected items */}
        {dataArr.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    </>
  );
};

export default NestedCheckBoxes;
