import React from "react";

import HomePage from "../../Pages/HomePage";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import ShoppingCartDetails from "../Sections/NewArrivals/Slides/ShoppingCart/ShoppingCartDetails";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import ForgetPassowrd from "../../Pages/ForgetPassword/ForgetPassowrd";
import ResetPassword from "../../Pages/ForgetPassword/ResetPassword";
import UpdateProfile from "../../Pages/UpdateProfile/UpdateProfile";



const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shoppingCartDetail" element={<ShoppingCartDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgetpassword" element={<ForgetPassowrd />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/updateProfile" element={<UpdateProfile />} />
    </Routes>
  );
};

export default RoutesPage;
