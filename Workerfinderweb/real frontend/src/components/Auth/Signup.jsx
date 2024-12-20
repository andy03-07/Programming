import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';  // Ensure this import is correct
import { signup } from '../redux/actions/authActions';
import '../Styles/signup.css';

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Ensure this is defined correctly


  const handleSignupPage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5001/authRoutes/signup', { email, password });
      localStorage.setItem('token', response.data.token); // Store JWT in local storage
      history.push('/login'); // Redirect to homepage after successful login
    } catch (err) {
      setError('Invalid credentials');
    }
  };


  // State variables for form fields
  const [form, setForm] = useState({
    fullName: '',
    mobileNumber: '',
    countryCode: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    captcha: '',
  });

  // State for error messages
  const [errors, setErrors] = useState({});

  // Handle form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (expand as needed)
    const newErrors = {};
    if (!form.fullName) newErrors.fullName = 'Full Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
    if (!form.username) newErrors.username = 'Username is required';
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!form.captcha) newErrors.captcha = 'Captcha is required';

    setErrors(newErrors);

    // If no errors, submit form (e.g., send to backend)
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', form);

      // Dispatch the signup action to save the user data in the backend
      dispatch(signup(form));

      // Navigate to login page after successful signup
      navigate('/login'); // This redirects to the login page
    }
  };

  return (
    <div className="signup-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>

        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Full Name"
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}

        <label>Country Code</label>
        <select
          name="countryCode"
          value={form.countryCode}
          onChange={handleChange}
        >
          <option value="+1">USA (+1)</option>
          <option value="+44">UK (+44)</option>
          <option value="+91">India (+91)</option>
          <option value="+61">Australia (+61)</option>
          <option value="+81">Japan (+81)</option>
          {/* Add more options as needed */}
        </select>

        <label>Mobile Number</label>
        <input
          type="text"
          name="mobileNumber"
          value={form.mobileNumber}
          onChange={handleChange}
          placeholder="Mobile Number"
        />
        {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        {/* CAPTCHA placeholder */}
        <label>Captcha</label>
        <input
          type="text"
          name="captcha"
          value={form.captcha}
          onChange={handleChange}
          placeholder="Enter Captcha"
        />
        {errors.captcha && <p className="error">{errors.captcha}</p>}

        <button type="submit" className="signup-btn">Create Account</button>
      </form>
    </div>
  );
};

export default SignupPage;
