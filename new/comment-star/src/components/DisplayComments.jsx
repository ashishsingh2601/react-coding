import React from "react";
import Rating from "./Rating";

const DisplayComments = ({ formData }) => {

  return (
    <main>
      {formData &&
        formData?.map((dataItem) => {
          return (
            <div key={Date.now()}>
              <p>{dataItem.comment}</p>
              <Rating rating={dataItem.rating}/>
            </div>
          );
        })}
        
    </main>
  );
};

export default DisplayComments;
