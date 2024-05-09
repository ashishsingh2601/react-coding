const container = document.querySelector(".main__container");
const form = document.querySelector(".form");
const addBtn = document.querySelector("#add-btn");
const removeBtn = document.querySelector("#remove-btn");

const finalData = [];

let dataObj = {};

form.addEventListener("submit", handleFormSubmit);
addBtn.addEventListener("click", handleAddFields);
removeBtn.addEventListener("click", handleRemoveFields);

function handleAddFields() {
  const formFields = document.querySelector("#form-fields");
  const newInput = document.createElement("div");
  newInput.classList.add("input-control");
  newInput.innerHTML = `
    <label for="password" id="password__label">Password</label>
    <input type="text" aria-labelledby="password__label" name="password" id="password" />
    <small class="error"></small>
`;
  formFields.appendChild(newInput);
}

function handleRemoveFields() {
  const formFields = document.querySelector("#form-fields");
  const lastElement = formFields.lastElementChild;
  if (lastElement) {
    formFields.removeChild(lastElement);
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const values = [...formData.entries()];

  values.forEach((value) => {
    dataObj[value[0]] = value[1];
  });

  if (validateForm(values)) {
    console.log(values);
    finalData.push(dataObj);
    console.log(finalData);
    domAppender(finalData);
  } else {
    console.log("Form has error(s)");
  }
}

function setError(fieldType, errorMsg) {
  const inputElement = document.querySelector(`[name=${fieldType}]`);
  const divElement = inputElement.closest(".input-control");

  const errorElement = divElement.querySelector(".error");
  errorElement.innerText = errorMsg;
  errorElement.classList.add("hasError");
}

function removeError(fieldType) {
  const inputElement = document.querySelector(`[name=${fieldType}]`);
  const divElement = inputElement.closest(".input-control");

  const errorElement = divElement.querySelector(".error");
  errorElement.innerText = "";
  errorElement.classList.remove("hasError");
}

function validateForm(values) {
  let isFormValid = true;

  values.forEach((value) => {
    if (value[0] === "email") {
      if (value[1] === "") {
        setError(value[0], "Email can't be empty");
        isFormValid = false;
      } else if (!value[1].includes("@")) {
        setError(value[0], "Email ain't valid");
        isFormValid = false;
      } else {
        removeError(value[0]);
      }
    }
    if (value[0] === "age") {
      if (isNaN(parseInt(value[1])) || parseInt(value[1]) <= 0) {
        setError(value[0], "Age must be a positive number");
        isFormValid = false;
      } else if (value[1] === "") {
        setError(value[0], "Age can't be empty");
        isFormValid = false;
      } else {
        removeError(value[0]);
      }
    }
    if (value[0] === "name") {
      if (value[1] === "") {
        setError(value[0], "Name can't be empty");
        isFormValid = false;
      } else {
        removeError(value[0]);
      }
    }
    if (value[0] === "password") {
      if (value[1] === "") {
        setError(value[0], "Password can't be empty");
        isFormValid = false;
      } else if (value[1] !== "") {
        if (value[1].length < 8 || value.length > 30) {
          setError(value[0], "Password must be of 8-30 characters");
          isFormValid = false;
        } else {
          removeError(value[0]);
        }
      }
    }
  });

  return isFormValid;
}

function domAppender(data = []) {
  const detailsElement = document.createElement("div");
  if (data[0].name) {
    const nameElement = document.createElement("p");
    nameElement.innerText = data[0].name;
    detailsElement.appendChild(nameElement);
  }
  if (data[0].age) {
    const ageElement = document.createElement("p");
    ageElement.innerText = data[0].age;
    detailsElement.appendChild(ageElement);
  }

  if (data[0].email) {
    const emailElement = document.createElement("p");
    emailElement.innerText = data[0].email;
    detailsElement.appendChild(emailElement);
  }
  if (data[0].password) {
    const passwordElement = document.createElement("p");
    passwordElement.innerText = data[0].password;
    detailsElement.appendChild(passwordElement);
  }

  container.appendChild(detailsElement);
}
