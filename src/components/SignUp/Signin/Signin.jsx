import React, { useState } from "react";
import "./signin.css";
import { signInAuthuserfromEmailandPassword } from "../../../utils/firebase";
import { Navigate, useNavigate } from "react-router-dom";
const SignIn = () => {
  const defaultformfield = {
    email: "",
    password: "",
  };

  const [formfield, setformfield] = useState(defaultformfield);

  const { email, password } = formfield;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformfield({ ...formfield, [name]: value });
    // console.log(formfield);
  };

  // Creating User From Email And Password
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(password);
    if (!email || !password) {
      alert("Invalid Credentials");
    }
    try {
      const { user } = await signInAuthuserfromEmailandPassword(
        email,
        password
      );
      try {
        setformfield(defaultformfield);
      } catch (e) {
        console.log(e.message);
      }
      navigate("/home");
      // alert("Sign in Successful");
    } catch (error) {
      alert("Please Enter Valid Credentials");
    }
  };
  return (
    <>
      <div className="signindiv">
        <h2>Already Have an Account</h2>
        <h4>Login here</h4>
        <form action="" className="signinform" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
export default SignIn;
