import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Common.css";

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm('로그아웃 하시겠습니까?');
    if (confirmed) {
      setIsLoggedIn(false);
      navigate('/');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow">
        <div className="container">
          <Link to="/" className="navbar-brand d-flex align-items-center" href="#">
            <span className="navbar-text fw-bold fs-4">22100423 YosepShim</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active fw-semibold" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/create-user">
                  Sign Up
                </Link>
              </li>
              {isLoggedIn && (
                <li className="nav-item mx-2">
                  <Link className="nav-link fw-semibold" to="/show-user">
                    Show User
                  </Link>
                </li>
              )}
              <li className="nav-item mx-2">
                {isLoggedIn ? (
                  <button className="btn btn-outline-light fw-semibold px-4" onClick={handleLogout}>
                    Logout
                  </button>
                ) : (
                  <Link className="btn btn-light fw-semibold px-4" to="/login">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}