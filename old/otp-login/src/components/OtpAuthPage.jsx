import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import OtpInput from "./OtpInput";

const OtpAuthPage = () => {
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [phoneNum, setPhoneNum] = useState("");
  const phoneInputRef = useRef(null);

  const handleChange = (e) => {
    setPhoneNum(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const regex = new RegExp("[0-9]", "g")
    
    // /[^0-9]/g;

    console.log("vids", regex.test(phoneNum))

    if(phoneNum.length < 10 || !regex.test(phoneNum)){
        alert("Enter valid phone number");
        return;
    }

    setShowOtpInput(true);

  }


  const otpSubmissionHandler = () => {
    console.log("Login Successful!");
  }

  useEffect(()=> {
    if(phoneInputRef?.current){
        phoneInputRef?.current?.focus()
    }
  }, [])

  return (
    <>
      {!showOtpInput ? (
        <form onSubmit={submitHandler} className="form">
          <input
            type="text"
            value={phoneNum}
            placeholder="Enter Phone Number"
            onChange={handleChange}
            ref={phoneInputRef}
          />
          <button className="btn" type="submit">Submit</button>
        </form>
      ) : (
        <OtpInput length={4}  otpSubmissionHandler={otpSubmissionHandler} />
      )}
    </>
  );
};

export default OtpAuthPage;
