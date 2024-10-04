// 로그인 서비스를 구현해보았습니다.

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('https://66ff38152b9aac9c997e8ed9.mockapi.io/api/oss/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                navigate('/dashboard');
            } else {
                throw new Error('로그인 실패. 아이디와 비밀번호를 확인하세요. ');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='login-form'>
            <div className='heading'>
                {isLoading && <p>로그인 중...</p>}
                {error && <p>오류: {error}</p>}
                <p>로그인</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">dlapdlf</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">비밀번호</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleInput}
                    />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">로그인</button>
            </form>
        </div>
    );
};

export default Login;