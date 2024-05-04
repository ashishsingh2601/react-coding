import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FormDataContext } from "../context/FormDataProvider";
import { getData, postData, updateData } from "../apis/formApis";
import Content from "./Content";
import { url } from "../constants/constants";

const Form = () => {
  const [formData, setFormData] = useState({});
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const { setFormDataValues } = useContext(FormDataContext);
  const [errors, setErrors] = useState({});

  //   const arr = []

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = "";
    if (name === "username" && value.trim() === "") {
      error = "Username is invalid";
    } else if (name === "email" && !value.includes("@")) {
      error = "Invalid email format";
    } else if (name === "age" &&  (isNaN(value) || value < 1)) {
      error = "Invalid age";
    }

    setErrors((errData) => {
      return {
        ...errData,
        [name]: error,
      };
    });

    setFormData((formData) => {
      return {
        ...formData,
        [name]: value,
      };
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    // arr.push(formData)

    const formHasErrors = Object.values(errors).some((err) => err != "");

    if (formHasErrors) {
      alert("Invalid details, please fix before Submission!");
    }else{
      if (!isUpdateMode) {
        postData(url, formData);
      } else {
        updateData(url, formData.id, formData);
      }
    }

    
  };

  const handleUpdateClick = (data) => {
    setIsUpdateMode(true);
    setFormData(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      setFormDataValues(await getData(url));
    };
    fetchData();
  }, [url]);

  useEffect(() => {
    return () => {
      setErrors({})
    }
  }, [])

  return (
    <main>
      <form onSubmit={handleSubmission}>
        <label htmlFor="username" id="username_label">
          Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          aria-labelledby="username_label"
          onChange={handleChange}
          value={formData.username || ""}
        />
        {errors.username && <small>{errors.username}</small>}
        <label htmlFor="email" id="email_label">
          E-mail:
        </label>
        <input
          type="text"
          name="email"
          id="email"
          aria-labelledby="email_label"
          onChange={handleChange}
          value={formData.email || ""}
        />
        {errors.email && <small>{errors.email}</small>}
        <label htmlFor="age" id="age_label">
          Age:
        </label>
        <input
          type="text"
          name="age"
          id="age"
          aria-labelledby="age_label"
          onChange={handleChange}
          value={formData.age || ""}
        />
        {errors.age && <small>{errors.age}</small>}
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>

      <section>
        <Content handleUpdateClick={handleUpdateClick} />
      </section>
    </main>
  );
};

export default Form;
