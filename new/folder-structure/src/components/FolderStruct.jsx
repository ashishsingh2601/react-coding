import React from "react";
import { useState } from "react";

const FolderStruct = ({ structure: tree }) => {
  const [structure, setStructure] = useState(tree);
  const [expand, setExpand] = useState(false);

  console.log(structure.id, structure.isFolder, structure.name);

  const handleClick = () => {
    setExpand((prev) => !prev);
  };

  const handleKeyPress = (e) => {
    if(e.key === "Enter" && !expand){
        setExpand(true);
    }
    if(e.key === "Backspace" && expand){
        setExpand(false);
    }
  }

  return (
    <main>
      <div
        className={["stuct__item", structure.isFolder ? "isFolder" : ""].join(
          " "
        )}
        onClick={handleClick}
        tabIndex={"0"}
        onKeyDown={(e) => handleKeyPress(e)}
      >
        {structure.isFolder ? "F - " : "f - "} {structure.name}
      </div>
      {expand && (
        <div style={{ paddingLeft: "1.5rem" }}>
          {structure.items?.map((item) => {
            return <FolderStruct structure={item} />;
          })}
        </div>
      )}
    </main>
  );
};

export default FolderStruct;    
