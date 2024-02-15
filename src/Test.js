import React, { useState,useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

import TestUsers from "./TestUser";


const Test = () => {
  const [userIdCheck, setUserIdCheck] = useState("");
  const [testUsers, setTestUsers] = useState([]);


  const handleSave = () => {
    localStorage.setItem("userIdCheck", userIdCheck);
    console.log(userIdCheck);
  };

  return (
    <div>
      <input
        type="text"
        value={userIdCheck}
        onChange={(e) => setUserIdCheck(e.target.value)}
      />
      <button onClick={handleSave}>Lưu</button><br/>
      <Link to="/users">Danh sách user</Link><br/>
      <Routes>
            <Route path="/users"
                element={
                    <TestUsers testUsers={testUsers} />
                } 
            />
       </Routes>     
    </div>
  );
};
export default Test;