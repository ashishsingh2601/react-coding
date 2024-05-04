import React, { useState } from "react";

const MultistepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    email: "",
    phone: "",
    city: "",
    pincode: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = "";
    if (name === "username" && value.trim() === "") {
      error = "Invalid Username";
    } else if (
      name === "age" &&
      (Number.isNaN(value) ||
        value.length < 1 ||
        (value.length > 0 && Number.isNaN(value)))
    ) {
      error = "Age must be a whole number";
    } else if (name === "email" && !value.includes("@")) {
      error = "Email ain't valid";
    } else if (name === "phone" && value.length < 10) {
      error = "Phone ain't valid";
    } else if (name === "city" && value.trim() === "") {
      error = "City can't be empty";
    } else if (name === "pincode" && value.length < 6 && value.length > 8) {
      error = "Invalid Pincode";
    }

    setErrors((errors) => {
      return {
        ...errors,
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

  let hasError = false;

  const handleSubmit = (e) => {
    e.preventDefault();

    hasError = Object.values(errors).some((error) => error !== "");

    if (!hasError) {
      console.log(formData);
    } else {
      alert("Invalid Data!");
    }
  };

  return (
    <main
      style={{
        border: "1px solid black",
        padding: "1.5rem",
        borderRadius: "15px",
      }}
    >
      <form onSubmit={handleSubmit}>
        {step === 1 ? (
          <>
            <label>Name:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <div>
              {errors.username && (
                <small style={{ color: "red" }}>{errors.username}</small>
              )}
            </div>
            <label>Age:</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            <div>
              {errors.age && (
                <small style={{ color: "red" }}>{errors.age}</small>
              )}
            </div>
          </>
        ) : step === 2 ? (
          <>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <div>
              {errors.email && (
                <small style={{ color: "red" }}>{errors.email}</small>
              )}
            </div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <div>
              {errors.phone && (
                <small style={{ color: "red" }}>{errors.phone}</small>
              )}
            </div>
          </>
        ) : step === 3 ? (
          <>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <div>
              {errors.city && (
                <small style={{ color: "red" }}>{errors.city}</small>
              )}
            </div>

            <label>Pin-Code:</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
            <div>
              {errors.pincode && (
                <small style={{ color: "red" }}>{errors.pincode}</small>
              )}
            </div>
          </>
        ) : null}
      </form>
      <section>
        {step > 1 && (
          <button
            onClick={() => {
              if (!hasError) setStep(step - 1);
            }}
            disabled={hasError}
          >
            Previous
          </button>
        )}
        {step < 3 && (
          <button
            onClick={() => {
              if (!hasError) setStep(step + 1);
            }}
            disabled={hasError}
          >
            Next
          </button>
        )}
        {step === 3 && <button onClick={handleSubmit}>Submit</button>}
      </section>
    </main>
  );
};

export default MultistepForm;
