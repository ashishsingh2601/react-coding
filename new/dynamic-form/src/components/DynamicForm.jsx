import React, { useState } from "react";
import { useEffect } from "react";

const DynamicForm = () => {
  const [inputFields, setInputFields] = useState([
    {
      name: "",
      age: "",
    },
  ]);
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index, e) => {
    const { name, value } = e.target;

    let newErrors = [...errors];

    if (name === "name" && value === ""){
        newErrors[index] = { index, errorMsg: "Name is mandatory", errorFieldType: "name" };
    }else if(name === "age" && value === "") {
        newErrors[index] = {index, errorMsg: "Age is mandatory", errorFieldType: "age"};
    }else{
        delete newErrors[index];
    }

    setErrors(newErrors);

    let data = [...inputFields];
    data[index][name] = value;
    setInputFields(data);
    setSubmitted(false);
  };

  useEffect(() => {
    setSubmitted(false);
  }, [inputFields])

  const handleAddField = () => {
    let newField = { name: "", age: "" };

    setInputFields([...inputFields, newField]);
  };

  const handleRemoveField = (index, e) => {
    e.stopPropagation();

    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);

    let newErrors = [...errors];
    delete newErrors[index];
    setErrors(newErrors);

  };

  console.log("->", errors)

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!errors.length){
        console.log(inputFields);
        setSubmitted(true);
    }else{
        alert("Form has Errors!");
    }
  };




  return (
    <main>
      <form onSubmit={handleSubmit}>
        {inputFields?.map((field, index) => {
          return (
            <div key={index} className="field">
              <input
                type="text"
                name="name"
                value={field.name}
                onChange={(e) => handleChange(index, e)}
                placeholder="Name"
              />
              {errors[index] && errors[index]?.errorFieldType === "name" && (
                <p style={{ color: "red" }}>{errors[index].errorMsg}</p>
              )}
              <input
                type="text"
                name="age"
                value={field.age}
                onChange={(e) => handleChange(index, e)}
                placeholder="Age"
              />
              {errors[index] && errors[index]?.errorFieldType === "age" && (
                <p style={{ color: "red" }}>{errors[index].errorMsg}</p>
              ) }
              <button onClick={(e) => handleRemoveField(index, e)}>
                Remove
              </button>
            </div>
          );
        })}
        <button type="button" onClick={handleAddField}>
          Add Field
        </button>
        <button type="submit">Submit</button>
      </form>
      { submitted &&
        <section>
            {
                inputFields?.map((item, index) => {
                    return (
                        <main key={index}>
                            <div>
                                {item.name}
                            </div>
                            <div>
                                {item.age}
                            </div>
                        </main>
                    )
                })
            }
        </section>
      }
    </main>
  );
};

export default DynamicForm;
