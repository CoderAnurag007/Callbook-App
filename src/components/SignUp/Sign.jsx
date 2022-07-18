import React from "react";
import SignUp from "../SignUp/Signup/SignUp";
import SignIn from "../SignUp/Signin/Signin";
import "./sign.css";

const Sign = () => {
  return (
    <>
      <div className="sign">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
};

export default Sign;
