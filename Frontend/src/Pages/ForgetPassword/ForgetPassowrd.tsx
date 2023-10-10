import React, { useState } from "react";
import InputField from "../../UserAuth/InputFields";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { genarateOTP, verifyOTP } from "../../UserAuth/API";

const ForgetPassword = () => {
  const [recoveremail, setRecoverEmail] = useState("");
  const [buttonclick, setButtonClick] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const navigate = useNavigate(); // Initialize navigate

  const handleEmailSubmit = async () => {
    try {
      const response = await genarateOTP(recoveremail);

      if (response && response.code) {
        setOtpSent(true);
        setError("");
        setSuccessMessage("OTP is successfully sent to the email address");

        //store the email localStorage
        localStorage.setItem("resetEmail", recoveremail)
      } else {
        setError("Invalid email address or email not found");
        setOtpSent(false);
      }
    } catch (error) {
      if (!recoveremail) {
        setError("Please enter your email address");
      } else {
        setError("An error occurred.");
      }
      setOtpSent(false);
    }
  };

  const handleOTPSubmit = async () => {
    try {
      const otpResponse = await verifyOTP({ code: otp, email: recoveremail });

      if (otpResponse && otpResponse.status === 200) {
        setError("");
        if (otpResponse.data.msg === "Verify OTP Success") {
          setSuccessMessage("OTP Verification Success");
          // Use navigate to move to the reset password page
          navigate("/resetpassword");
        } else {
          setError("Invalid OTP");
        }
      } else {
        setError("OTP verification failed");
      }
    } catch (error) {
      setError("Something went wrong during the OTP verification process.");
    }
  };

  const handleButtonClick = () => {
    if (buttonclick) {
      handleEmailSubmit();
    } else {
      handleOTPSubmit();
    }
    setButtonClick(!buttonclick);
  };

  return (
    <>
      <form className="items-center justify-center p-9 md:pl-40 md:pr-40">
        <div className="justify-center mb-10 heading">
          <h1 className="mb-5 text-2xl font-extrabold md:text-4xl font-volkhavo">
            FASCO
          </h1>
          <p className="mb-5 ml-auto mr-auto text-2xl font-semibold text-center mt-7 font-popins">
            Reset your password
          </p>

          <div className="text-sm text-center font-volkhavo headingTitle">
            <p>
              {otpSent
                ? "Enter the 5-digit OTP Code"
                : buttonclick
                ? "Enter the email address associated with your account, and we'll send you a link to reset your password"
                : "Enter the 5-digit OTP Code"}
            </p>
          </div>
        </div>

        {(buttonclick || otpSent) && (
          <>
            <InputField
              label={buttonclick ? "Email Address" : "OTP code"}
              name={buttonclick ? "Your Email Address" : "Your OTP Code"}
              type="text"
              value={buttonclick ? recoveremail : otp}
              onChange={buttonclick ? setRecoverEmail : setOtp}
              error=""
            />
            {error && (
              <div className="mt-2 text-center text-red-500 font-popins">
                {error}
              </div>
            )}
            {successMessage && (
              <div className="mt-2 text-center text-green-500 font-popins">
                {successMessage}
              </div>
            )}

            <div className="items-center justify-center clearfix mb-5 text-center signPage mt-7">
              <button
                type="button" // Use type="button"
                className="pt-4 pb-4 pl-20 pr-20 text-center sm:pt-4 sm:pb-4 sm:pl-40 sm:pr-40 signupbtn hover:font-bold"
                onClick={handleButtonClick}
              >
                {buttonclick ? "Request OTP" : "Send"}
              </button>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default ForgetPassword;
