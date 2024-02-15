import React, { useState, useEffect } from "react";
import axios from "axios";


const TestUsers = () => {
  const [users, setUsers] = useState([]);
  const [userIdCheck, setUserIdCheck] = useState(
    localStorage.getItem("userIdCheck") || ""
  );

  useEffect(() => {
    axios.post("http://localhost:8080/getAllUser",{
        headers:{
            "userIdCheck":userIdCheck
        }
    }).then((response) => {
      setUsers(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Danh sách users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2> Ten nguoi dung: {user.name}</h2>
          <p>ID cua nguoi dung: {user.userId}</p>
        </div>
      ))}
    </div>
  );
};
export default TestUsers;