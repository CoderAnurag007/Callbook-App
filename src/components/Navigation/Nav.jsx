import React from "react";
import { Outlet, Link, Router, Routes } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../auth";
import Home from "../landing";
import { SignoutUser, auth } from "../../utils/firebase";
import Protectedroute from "../../protectedroute";
import "./nav.css";
const Nav = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser + "This is current user in the Navbar");
  return (
    <>
      <div className="navbar">
        <h1>Callbook App</h1>
        <br />
        <ul className="links">
          <li>
            <Link className="nav-link" to={"/home"}>
              Home
            </Link>
          </li>
          <li>
            {currentUser ? (
              <span id="nav-link" onClick={SignoutUser}>
                Logout
              </span>
            ) : (
              <Link className="nav-link" to={"/sign-in"}>
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
