import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Loader from '../Common/Loader';
import './User.css';
const CreateUser = () => {
    const navigate = useNavigate();
    const createUserApi = "https://66ff38152b9aac9c997e8ed9.mockapi.io/api/oss/users"
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        birthDate: "",
        gender: "",
        job: ""
    })

    const handelInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(name, value)
        setUser({ ...user, [name]: value });
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        console.log(user)
        try {
            setIsLoading(true);
            const response = await fetch(createUserApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                setUser({ name: "", email: "", phone: "", birthDate: "", gender: "", job: "" })
                navigate('/show-user');
            } else {
                console.error('Form submission failed!');
            }

        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='user-form'>
            <div className='heading'>
                {isLoading && <Loader />}
                {error && <p>Error: {error}</p>}
                <p>User Form</p>
            </div>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handelInput} />
                </div>
                <div className="mb-3 mt-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="pwd" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" name="phone" value={user.phone} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="bDate" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" id="birthDate" name="birthDate" value={user.birthDate} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div>
                        <input type="radio" id="male" name="gender" value="male" onChange={handelInput} />
                        <label for="male"> Male  </label>
                        <input type="radio" id="female" name="gender" value="female" onChange={handelInput} />
                        <label for="female"> Female</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="job" className="form-label">Job</label>
                    <input type="text" className="form-control" id="job" name="job" value={user.job} onChange={handelInput} />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default CreateUser