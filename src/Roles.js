import React, { useState, useEffect } from "react";
import axios from "axios";


const Roles = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:8080/getAllRole").then((response) => {
      setRoles(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Danh sách roles</h1>
      {roles.map((role) => (
        <div key={role.id}>
          <h2>Ten Quyen: {role.roleName}</h2>
          <p>ID cua Quyen: {role.roleId}</p>
        </div>
      ))}
    </div>
  );
};
export default Roles;