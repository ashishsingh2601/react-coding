import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";

const OtpInput = ({ length = 4, otpSubmissionHandler = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

    const otpInputRef = useRef([]);

    const handleClick = (index) => {
        otpInputRef.current[index].setSelectionRange(1, 1);

        // edge cases
        if(index > 0 && !otp[index - 1]){
            otpInputRef?.current[otp.indexOf("")].focus();
        }
    }

    const handleChange = (index, e) => {
        let value =  e.target.value;

        //check if val is number or not, if not, then return
        if(isNaN(value)) return;

        // extract otp in newOtp (will be used for updates, 
        //                        cuz setState is async, 
        //                        so using otp will give unexpected results)
        let newOtp = [...otp];

        // allow only one input using substring
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // submit trigger
        let combinedOtp = newOtp.join("");
        if(combinedOtp.length === length){
            otpSubmissionHandler(combinedOtp);
        }

        // move to next input when current is filled
        if(value && index < length - 1 && otpInputRef?.current[index + 1]){
            otpInputRef?.current[index + 1]?.focus();
        }
    }
    
    const handleKeyDown = (index, e) => {
        if(e.key === "Backspace" && otp[index] === "" && index > 0 && otpInputRef?.current[index - 1]){
            otpInputRef?.current[index - 1].focus();
        }
    }


    useEffect(() => {
        if(otpInputRef?.current[0]){
            otpInputRef.current[0].focus();
        }
    }, [])

  return (
    <div className="otp__input--container">
      {[...otp]?.map((item, index) => {
        return (
          <input
            type="text"
            ref={(input) => (otpInputRef.current[index] = input)}
            onClick={() => handleClick(index)}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            value={item}
            key={index}
            className="otp__input"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
