import React, { useState, useEffect } from "react";
import axios from "axios";


const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:8080/getAllTeam").then((response) => {
      setTeams(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Danh sách teams</h1>
      {teams.map((team) => (
        <div key={team.id}>
          <h2>Ten cua nhom nguoi dung: {team.name}</h2>
          <p>ID cua nhom nguoi dung: {team.codeTeam}</p>
        </div>
      ))}
    </div>
  );
};
export default Teams;