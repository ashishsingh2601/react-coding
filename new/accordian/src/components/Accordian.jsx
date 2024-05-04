import React from "react";
import { useContext, useState } from "react";
import { createContext } from "react";

export const AccordianContext = createContext(null);

const Accordian = ({ currentAccordian, onChange, children }) => {
  return (
    <div className="accordian__container">
      <AccordianContext.Provider value={{ currentAccordian, onChange }}>
        {children}
      </AccordianContext.Provider>
    </div>
  );
};

export default Accordian;

Accordian.HeaderContainer = ({ children }) => {
  return <div>{children}</div>;
};

Accordian.ContentContainer = ({ children }) => {
  return <div>{children}</div>;
};

Accordian.HeaderItem = ({ children, label, index }) => {
  const { currentAccordian, onChange } = useContext(AccordianContext);
  const [expanded, setExpanded] = useState(false);

  const handleItemClick = () => {
    onChange(index);
    setExpanded(!expanded);
  };

  return (
    <>
      <div
        onClick={handleItemClick}
        className={currentAccordian === index ? "active" : ""}
        id="headerItem"
      >
        {label}
      </div>
      <div>{expanded && children}</div>
    </>
  );
};

Accordian.ContentItem = ({ children, index }) => {
  const { currentAccordian } = useContext(AccordianContext);

  return (
    <div className="accordian_content">
      {currentAccordian === index && children}
    </div>
  );
};
