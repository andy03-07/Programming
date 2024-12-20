// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../redux/actions/authAction';
// import axios from 'axios';
// import '../Styles/login.css';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [error, setError] = useState(''); // Error state to capture and display error messages

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Clear any previous error messages

//     if (!form.email || !form.password) {
//       setError('Please enter both email and password');
//       return;
//     }
//     if (form.role === 'admin' && form.category) {
//       // Navigate to the respective admin category page
//       navigate(`/admin/${form.category}`);
//     } 
//     // else {
//     //   // For user role, navigate to login page
//     //   navigate('/');
//     // }
//     try {
//       const response = await axios.post('http://127.0.0.1:5001/api/auth/login', form);

//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token); // Store token in localStorage

//         const user = response.data.user; // Assuming response contains user details like role and category
//         dispatch(login(user)); // Store the user data in Redux or context if needed

//         // Redirect based on role
//         if (user.role === 'admin' && user.category) {
//           navigate(`/admin/${user.category}`);
//         } else {
//           navigate('/');
//         }
//       }
//     } catch (error) {
//       // Check if ( error contains a response with a message from the backend)
//       if (error.response && error.response.data && error.response.data.message) {
//         setError(error.response.data.message); // Set error message from backend
//       } else {
//         setError('An unexpected error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Email or Username</label>
//         <input
//           type="text"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Enter your email or username"
//         />
        
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           placeholder="Enter your password"
//         />

//         {/* Display error message if there is one */}
//         {error && <p className="error">{error}</p>} 

//         <button type="submit" className="login-btn">Login</button>
//       </form>
//       <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/authAction';
import axios from 'axios';
import '../Styles/login.css';


const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(''); // Error state to capture and display error messages

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error messages
  
    if (!form.email || !form.password) {
      setError('Please enter both email and password');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', form);
    
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    
        // Dispatch login action to store user data in Redux
        const user = response.data.user || {};
        dispatch(login(user));
    
        // Retrieve role and category from localStorage
        const signupRole = localStorage.getItem('signupRole');
        const signupCategory = localStorage.getItem('signupCategory');
    
        // Redirect based on role and category
        if (signupRole === 'admin' && signupCategory) {
          navigate(`/admin/${signupCategory}`);
        } else {
          navigate('/'); // Redirect regular users to the home page
        }
    
        // Clear role and category from localStorage after redirection
        localStorage.removeItem('signupRole');
        localStorage.removeItem('signupCategory');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
    
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        {/* Display error message if there is one */}
        {error && <p className="error">{error}</p>}

        <button type="submit" className="login-btn">Login</button>
      </form>
      <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
    </div>
  );
};

export default LoginPage;
