import React, { useState } from "react";
import "./App.css";
import CreateUser from "./components/User/CreateUser";
import ShowUser from "./components/User/ShowUser";
import { Route, Routes } from "react-router-dom";
import EditUser from "./components/User/EditUser";
import User from "./components/User/User";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer"
import Home from "./components/Layout/Home";
import Login from "./components/User/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="container">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> { }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/show-user" element={<ShowUser />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> {/* 로그인 성공 시 상태 업데이트 */}
        </Routes>
      </header>
      <div className="text-center my-3 d-flex align-items-center justify-content-center">
          <a
            href="https://github.com/syosep"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
          <div className="github-info">
            <h5>심요셉</h5>
            <p>@syosep</p>
            <p>개발 잘 하고 싶어요.</p>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;