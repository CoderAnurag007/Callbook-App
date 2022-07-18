import React, { useState } from "react";
import "./Signup.css";
import {
  createAuthuserfromEmailandPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase";
import FormInput from "../../forminput/forminput";
const SignUp = () => {
  const defaultformfield = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formfield, setformfield] = useState(defaultformfield);
  const { displayName, email, password, confirmPassword } = formfield;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformfield({ ...formfield, [name]: value });
    console.log(formfield);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password not matching");
      return;
    }
    try {
      console.log(email + "and " + password);
      const response = await createAuthuserfromEmailandPassword(
        email,
        password
      );
      console.log(response);
      const { user } = response;
      await createUserDocumentFromAuth(user, { displayName });
      setformfield(defaultformfield);
      alert("Thankyou For Connecting ");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email Already exists");
      } else {
        console.log("error is encountered in creation of the user", error);
      }
    }
  };
  return (
    <>
      <div className="signupdiv">
        <h2>Don't Have an Account</h2>
        <h4>Create an account</h4>

        <form action="" className="signupform" onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            inputOptions={{
              type: "text",
              id: "name",
              required: true,
              name: "displayName",
              value: displayName,
              onChange: handleChange,
              placeholder: "Enter your Name",
            }}
          />
          <FormInput
            inputOptions={{
              type: "email",
              id: "email123",
              required: true,
              name: "email",
              value: email,
              onChange: handleChange,
              placeholder: "Enter Email",
            }}
          />
          <FormInput
            label="Password"
            inputOptions={{
              type: "password",
              id: "pass",
              required: true,
              name: "password",
              value: password,
              onChange: handleChange,
              placeholder: "Enter password",
            }}
          />
          <FormInput
            label="Confirm Password"
            inputOptions={{
              type: "password",
              id: "confpass",
              required: true,
              name: "confirmPassword",
              value: confirmPassword,
              onChange: handleChange,
              placeholder: "Re-enter password",
            }}
          />
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};
export default SignUp;
