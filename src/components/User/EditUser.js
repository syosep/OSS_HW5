import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Common/Loader";
import "./User.css";

const EditUser = () => {
  const [user, setUser] = useState({ name: '', email: '', phone: '', birthDate: '', gender: '', job: '' }); // Initialize with empty fields
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const getUserApi = "https://66ff38152b9aac9c997e8ed9.mockapi.io/api/oss/users";

  const getUser = useCallback(() => {
    setIsLoading(true); // Set loading to true when fetching data
    axios
      .get(`${getUserApi}/${id}`)
      .then((response) => {
        setUser(response.data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch user data."); // Set a generic error message
        setIsLoading(false);
      });
  }, [id, getUserApi]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value })); // Update the user state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true before starting the PUT request

    fetch(`${getUserApi}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        navigate("/show-user");
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="user-form">
      <div className="heading">
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        <p>Edit Form</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="birthDate" className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            id="birthDate"
            name="birthDate"
            value={user.birthDate}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={user.gender == "male"}
              onChange={handleInput}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={user.gender === "female"}
              onChange={handleInput}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="job" className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            id="job"
            name="job"
            value={user.job}
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="btn btn-primary submit-btn">
          EDIT
        </button>
      </form>
    </div>
  );
};

export default EditUser;