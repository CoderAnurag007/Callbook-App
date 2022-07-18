import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Home from "./components/landing";
import { auth } from "./utils/firebase";
import { UserContext } from "./components/auth";
import { useContext } from "react";

const PrivateRoute = () => {
  const { currentUser } = useContext(UserContext);
  // determine if authorized, from context or however you're doing it
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return currentUser ? <Home /> : <Navigate to="/login" />;
};

export default PrivateRoute;
