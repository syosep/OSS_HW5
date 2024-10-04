import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./User.css";

const EditUser = () => {
  const [user, setUser] = useState({}); // Initialize as an object
  const [loading, setLoading] = useState(true); // Loading state
  const { id } = useParams();
  const getUserApi = "http://localhost:3000/user";

  const getUser = () => {
    setLoading(true); // Start loading
    axios
      .get(`${getUserApi}/${id}`) // Simplified URL concatenation
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.error(err); // Improved error logging
      })
      .finally(() => {
        setLoading(false); // End loading
      });
  };

  useEffect(() => {
    getUser();
  }, [id]); // Added id to dependency array

  return (
    <div className="user mt-5">
      {loading ? ( // Conditional rendering based on loading state
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
              <td>{user.name || 'N/A'}</td> {/* Provide fallback for empty values */}
            </tr>
            <tr>
              <td>Email</td>
              <td>{user.email || 'N/A'}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{user.phone || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EditUser;