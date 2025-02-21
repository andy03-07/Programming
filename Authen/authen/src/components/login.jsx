import React, { useState, useContext } from 'react';
import { UserContext } from './usercon';
import { useNavigate } from 'react-router-dom';
import '../Styles/log.css'
const Login = () => {
  const [username1, setUsername1] = useState('');
  const [password1, setPassword1] = useState('');
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("username:" ,username1,"password:", password1);
    if (username1 === user.username && password1 === user.password) {
      alert("Login successful");
    } else {
      alert("Login failed");
      navigate('/');

    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter a username"
          value={username1}
          onChange={(e) => setUsername1(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter a password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
