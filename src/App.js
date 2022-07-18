import React from "react";
import { Route, Routes } from "react-router-dom";
import { Authprovider, Userprovider } from "./components/auth";
import Home from "./components/landing";
import Applayout from "./components/layout";
import Nav from "./components/Navigation/Nav";
import Sign from "./components/SignUp/Sign";
import PrivateRoute from "./protectedroute";

import Protectedroute from "./protectedroute";
import { auth } from "./utils/firebase";
function App() {
  console.log(auth + "This is Auth");
  return (
    <Userprovider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="/" element={<Sign />} />

            <Route exact path="/" element={<Sign />} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/home" element={<Home />} />
            </Route>

            <Route path="*" element={<Sign />} />
          </Route>
        </Routes>
      </div>
    </Userprovider>
  );
}

export default App;
