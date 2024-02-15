import React, { useState, useEffect } from "react";
import axios from "axios";


const Groups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:8080/getAllGroup").then((response) => {
      setGroups(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Danh sách groups</h1>
      {groups.map((group) => (
        <div key={group.id}>
          <h2>Ten cua nhom quyen: {group.nameGroup}</h2>
          <p>ID cua nhom quyen: {group.groupId}</p>
        </div>
      ))}
    </div>
  );
};
export default Groups;