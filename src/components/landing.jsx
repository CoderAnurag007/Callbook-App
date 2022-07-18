import React, { useEffect, useState } from "react";
import { UserContext } from "./auth";
import { useContext } from "react";

import "./land.css";
const Home = () => {
  const { currentUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await fetch("https://randomuser.me/api/?results=20");
    // console.log(res);
    const data = await res.json();
    console.log(data.results);

    setUsers(data.results);
  };
  useEffect(() => {
    
    getUsers();
  }, []);
  return (
    <>
      <div className="land">
        <h1>Welcome </h1>
        <h2 className="landhead">Calllog Users</h2>
        <div className="users">
          {users.map((item) => {
            return (
              <div className="user">
                <div className="textpart">
                  <h2>
                    <span className="name">
                      {item.name.title + item.name.first + item.name.last}-
                    </span>
                  </h2>
                  <span className="phone">{item.phone}</span>
                </div>
                <div className="img">
                  <img src={item.picture.medium} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
