import React, { useState, useEffect } from "react";



const Users = (props) => {
  const users = props.users;
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
export default Users;