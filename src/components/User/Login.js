import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsLoggedIn }) => { // setIsLoggedIn을 props로 받음
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
      const response = await fetch(`https://66ff38152b9aac9c997e8ed9.mockapi.io/api/oss/users?email=${credentials.email}`);
      const users = await response.json();

      if (users.length > 0) {
        const user = users[0];
        if (user.password === credentials.password) {
          setIsLoggedIn(true); // 로그인 성공 시 상태 업데이트
          navigate('/dashboard'); // 대시보드로 이동
        } else {
          throw new Error('비밀번호가 일치하지 않습니다.');
        }
      } else {
        throw new Error('해당 이메일로 등록된 사용자가 없습니다.');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>로그인</h2>
        {isLoading && <p>로그인 중...</p>}
        {error && <p className="error-msg">오류: {error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInput}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInput}
              required
            />
          </div>
          <button type="submit" className="login-btn">로그인</button>
        </form>
      </div>
    </div>
  );
};

export default Login;