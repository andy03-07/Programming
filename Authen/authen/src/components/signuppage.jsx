import React, { useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {UserContext} from './usercon'
import '../Styles/sign.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    console.log('Username:', username, 'Password:', password);
    navigate('/login');
  };

  return (
    <div className="signuppage">
      <h2>Signup</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
         
      </form>
    </div>
  );
};

export default SignupPage;
