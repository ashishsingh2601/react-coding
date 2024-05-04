import { createContext, useState } from "react";

export const FormDataContext = createContext([]);

export const FormDataProvider = ({ children }) => {
  const [formDataValues, setFormDataValues] = useState([]);
 
  return (
    <>
      <FormDataContext.Provider value={{ formDataValues, setFormDataValues }}>
        {children}
      </FormDataContext.Provider>
    </>
  );
};

