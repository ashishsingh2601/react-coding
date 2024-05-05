import React, { useState } from "react";
import { useEffect } from "react";

const CheckDelete = () => {
  const arr = ["play cricket", "read book", "play video game"];

  const [elements, setElements] = useState([]);

  const arrWithCheckedStatus = arr.map((item, index) => {
        return {item, checked: false, id: index + 1}
  })
    
  useEffect(() => {
    setElements(arrWithCheckedStatus)
  }, [])

    
  const handleDelete = (index) => {
    const updatedElements = elements?.filter((item) => {
      if(item.id !== index) return item;
    });
    setElements(updatedElements);
  };

  const handleChange = (index) => {
    const updatedElements = elements.map((elem) => {
        return elem.id === index ? {...elem, checked: !elem.checked} : elem;
    })
    
    setElements(updatedElements)
    
  }

  return (
    <>
      {elements &&
        elements?.map((elem) => {
          return (
            <div key={elem.id}>
              <input
                type="checkbox"
                onChange={() => handleChange(elem.id)}
              />
              {elem.item}
              {elem.checked &&  (
                <button onClick={() => handleDelete(elem.id)}>Delete</button>
              )}
            </div>
          );
        })}
    </>
  );
};

export default CheckDelete;
