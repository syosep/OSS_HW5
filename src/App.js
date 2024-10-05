import React, { useState } from "react";
import "./App.css";
import CreateUser from "./components/User/CreateUser";
import ShowUser from "./components/User/ShowUser";
import { Route, Routes } from "react-router-dom";
import EditUser from "./components/User/EditUser";
import User from "./components/User/User";
import Header from "./components/Common/Header";
import Home from "./components/Layout/Home";
import Login from "./components/User/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="container">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/show-user" element={<ShowUser />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> {/* 로그인 성공 시 상태 업데이트 */}
        </Routes>
      </header>
    </div>
  );
}

export default App;