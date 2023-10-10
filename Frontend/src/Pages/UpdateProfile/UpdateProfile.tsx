import React, { useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import InputField from "../../UserAuth/InputFields";
import { updateUser } from "../../UserAuth/API";


type Errors = {
  user_name: string;
  email: string;
  phone_number: string;
  gender: string;
  password: string;
  confirm_password: string;
};

const UpdateProfile = () => {
  const [user_name, setusername] = useState("");
  const [phone_number, setphonenumber] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirmpassword] = useState("");




  // Initialize the errors object with empty strings
  const initialErrors: Errors = {
    user_name: "",
    email: "",
    phone_number: "",
    gender: "",
    password: "",
    confirm_password: "",
  };

  // Use the type for the errors object
  const [errors, setErrors] = useState<Errors>(initialErrors);

  const validateEmail = (email: string) =>{
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

    return emailRegex.test(email)
  }


  const UpdateUserData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const missingFields: Errors = {
      user_name: "",
      email: "",
      phone_number: "",
      gender: "",
      password: "",
      confirm_password: "",
    };



  
  if (!user_name || user_name.trim() === "") {
    missingFields.user_name = "User Name is required";
  }
  if (!phone_number || phone_number.trim() === "") {
    missingFields.phone_number = "Phone Number is required";
  }
  if (!email || email.trim() === "") {
    missingFields.email = "Email is required";
  } else if (!validateEmail(email)) {
    missingFields.email = "Invalid email address";
  }
  if (!gender || gender.trim() === "") {
    missingFields.gender = "Gender is required";
  }
  if (!password || password.trim() === "") {
    missingFields.password = "Password is required";
  }
  if (!confirm_password || confirm_password.trim() === "") {
    missingFields.confirm_password = "Confirm Password is required";
  } else if (password !== confirm_password) {
    missingFields.confirm_password = "Password do not match";
  }
  setErrors(missingFields);


    if (
      Object.keys(missingFields).every(
        (key) => missingFields[key as keyof Errors] === ""
      )
    ) {
      // Clear the errors
      setErrors(initialErrors);

      const newupdateUser = {
        user_name,
        phone_number,
        email,
        gender,
        password,
        confirm_password,
      };

      const updateResponse  = updateUser(newupdateUser)
      
try {
  alert("User details updated");
  setusername("");
  setphonenumber("");
  setemail("");
  setgender("");
  setpassword("");
  setconfirmpassword("");
} catch (err) {
  alert(err);
}
    }
  };

  return (
    <>
      <form style={{ border: "1px solid #ccc" }} onSubmit={UpdateUserData}>
        <div className="p-5 signUpcontainer md:pl-36 md:pr-36">
          <h1 className="mb-5 text-2xl font-extrabold md:text-4xl font-volkhavo">
            FASCO
          </h1>
          <h1 className="mb-5 text-3xl text-center font-volkhavo">Update Profile</h1>
          <p className="mb-4 text-lg font-normal font-popins">
            Please fill in this form to update your account.
          </p>
          <hr />

          {/* Use the InputField component for each input */}
          <InputField
            label="User Name"
            name="Username"
            type="text"
            value={user_name}
            onChange={setusername}
            error={errors.user_name}
          />

          <InputField
            label="Email"
            name="email"
            type="text"
            value={email}
            onChange={setemail}
            error={errors.email}
          />

          <InputField
            label="Phone Number"
            name="phone number"
            type="text"
            value={phone_number}
            onChange={setphonenumber}
            error={errors.phone_number}
          />

          <InputField
            label="Gender"
            name="gender"
            type="text"
            value={gender}
            onChange={setgender}
            error={errors.gender}
          />

          <InputField
            label="Change Password"
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

          <label>
            <input
              type="checkbox"
              defaultChecked
              name="remember"
              style={{ marginBottom: "15px" }}
              className="mr-2"
            />
            By creating an account, you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
            .
          </label>

          <div className="items-center justify-center clearfix text-center signPage mt-7 ">
            <button
              type="submit"
              className="pt-4 pb-4 pl-20 pr-20 text-center sm:pt-4 sm:pb-4 sm:pl-40 sm:pr-40 signupbtn"
            >
             Update
            </button>
          </div>

          <div className="mt-2 text-center backToLoginText font-popins">
            
            
              <span className="font-extrabold cursor-pointer text-slate-500">
                <Link to={"/"}>Back</Link>
              </span>
            
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateProfile;
