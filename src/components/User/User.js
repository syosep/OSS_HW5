import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./User.css";

const EditUser = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getUserApi = "https://66ff38152b9aac9c997e8ed9.mockapi.io/api/oss/users";

  const getUser = useCallback(() => {
    setLoading(true);
    axios
      .get(`${getUserApi}/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]); // id를 의존성 배열에 추가

  useEffect(() => {
    getUser();
  }, [getUser]); // getUser를 의존성 배열에 포함

  return (
    <div className="user mt-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{user.name || 'N/A'}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{user.email || 'N/A'}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{user.phone || 'N/A'}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{user.birthDate || 'N/A'}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{user.gender || 'N/A'}</td>
            </tr>
            <tr>
              <td>Job</td>
              <td>{user.job || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EditUser;