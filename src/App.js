import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import axios from "axios";
import Users from "./Users";
import Roles from "./Roles";
import Teams from "./Team";
import Groups from "./Group";

const App = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [teams,setTeams] = useState([]);
    const [groups,setGroups] = useState([]);
    const[userIdCheck,setUserIdCheck] = useState("");
    console.log(userIdCheck);

//   useEffect(() => {

//     axios.post("http://localhost:8080/getAllUser",{
//         header:{
//             "UserIdCheck":userIdCheck,
    
//         },
//     }).then((response) => {
//       setUsers(response.data);
//     });
//     // axios.post("http://localhost:8080/getAllRole").then((response) => {
//     //   setRoles(response.data);
//     // });
//     // axios.post("http://localhost:8080/getAllTeam").then((response) => {
//     //   setTeams(response.data);
//     // });
//     // axios.post("http://localhost:8080/getAllGroup").then((response) => {
//     //     setGroups(response.data);
//     //   });
//   }, [userIdCheck]);
    return (
        <div>
            <input
            type="text"
            value={userIdCheck}
            onChange={(e) => setUserIdCheck(e.target.value)}
      />
          <Link to="/"><h1>Trang chủ</h1></Link>
          <Link to="/users">Danh sách user</Link><br/>
          <Link to="/roles">Danh sách role</Link><br/>
          <Link to="/teams">Danh sach team</Link><br/>
          <Link to="/groups">Danh sach group</Link>
          <Outlet />
          <Routes>
            <Route path="/users" element={<Users users={users} userIdCheck ={userIdCheck} />} />
            <Route path="/roles" element={<Roles roles={roles} />} />
            <Route path="/teams" element={<Teams teams={teams} />} />
            <Route path="/groups" element={<Groups groups={groups} />} />
          </Routes>
        </div>
      );
};

export default App;

// Users.js



// Products.js

