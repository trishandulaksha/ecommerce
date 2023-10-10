import React, { useState,useEffect } from "react";
import InputField from "../../UserAuth/InputFields";
import { resetPassword } from "../../UserAuth/API";
import { useNavigate } from "react-router-dom";

type Errors = {
  password: string;
  confirm_password: string;
};

const ResetPassword = () => {
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirmpassword] = useState("");
  const [error, setError] = useState(""); 
  const [recoverdEmail, setrecoverdEmail] = useState("");
  
  const navigate = useNavigate();

  const initialErrors: Errors = {
    password: "",
    confirm_password: "",
  };

  const [errors, setErrors] = useState<Errors>(initialErrors);

  const missingFields: Errors = {
    password: "",
    confirm_password: "",
  };

  useEffect(() =>{
    const storedEmail = localStorage.getItem("resetEmail");
    if(storedEmail) {
      setrecoverdEmail(storedEmail);
    }
  
  })


 const resetPasswordHandle = async (e:React.MouseEvent) =>{
    e.preventDefault();

  
  if (!password || password.trim() === "") {
    missingFields.password = "Password is required";
  }
  if (!confirm_password || confirm_password.trim() === "") {
    missingFields.confirm_password = "Confirm Password is required";
  } else if (password !== confirm_password) {
    missingFields.confirm_password = "Password do not match";
  }
  setErrors(missingFields);

  const resetResponse = await resetPassword({email:recoverdEmail,password});
  if(resetResponse.status===201){
      setError(resetResponse.msg);
      navigate("/resetpassword");
      console.log("data Updataed")
  }else if(resetResponse.status===400){
    setError(resetResponse.msg)
  } 
 } 

  return (
    <>
      <form style={{ border: "1px solid #ccc" }}>
        <div className="p-5 signUpcontainer md:pl-36 md:pr-36">
          <h1 className="mb-5 text-2xl font-extrabold md:text-4xl font-volkhavo">
            FASCO
          </h1>
          <p className="mb-5 ml-auto mr-auto text-2xl font-semibold text-center mt-7 font-popins">
           Please Enter your New Password
          </p>

          <InputField
            label="New Password"
            name="psw"
            type="password"
            value={password}
            onChange={setpassword}
            error={errors.password}
          />

          <InputField
            label="Repeat Password"
            name="psw-repeat"
            type="password"
            value={confirm_password}
            onChange={setconfirmpassword}
            error={errors.confirm_password}
          />
        </div>
        <div className="error">
          <p>{error}</p>
        </div>
        <div className="items-center justify-center clearfix text-center signPage mt-7 ">
            <button
              type="submit"
              className="pt-4 pb-4 pl-20 pr-20 text-center sm:pt-4 sm:pb-4 sm:pl-40 sm:pr-40 signupbtn"
              onClick={(e)=>resetPasswordHandle(e)}
            >
              Send new passowrd
            </button>
          </div>
      </form>
    </>
  );
};

export default ResetPassword;
