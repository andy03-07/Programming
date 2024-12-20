import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../redux/actions/authAction';
import axios from 'axios';
import '../Styles/signup.css';

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    mobileNumber: '',
    countryCode: '',
    email: '',
    role: '',
    category: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    const newErrors = {};
    if (!form.fullName) newErrors.fullName = 'Full Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
    if (!form.username) newErrors.username = 'Username is required';
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (form.role === 'admin' && !form.category) newErrors.category = 'Category is required for Admin role';

    setErrors(newErrors);

    // Proceed only if there are no errors
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:5001/api/auth/signup', form);
        
        if (response.status === 201) { // Successful signup
          const user = response.data.user;
          dispatch(signup(user));
          
          localStorage.setItem('signupRole', form.role);
          localStorage.setItem('signupCategory', form.category);
           navigate('/login');
        } 
        else {
          console.error('Unexpected response status:', response.status);
        }
      } catch (error) {
        console.error('Error during signup:', error);
        if (error.response && error.response.data) {
          setErrors({ form: error.response.data.message });
        }
      }
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
        <select name="countryCode" value={form.countryCode} onChange={handleChange}>
          <option value="+1">USA (+1)</option>
          <option value="+44">UK (+44)</option>
          <option value="+91">India (+91)</option>
          <option value="+61">Australia (+61)</option>
          <option value="+81">Japan (+81)</option>
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

        <label>Role</label>
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {form.role === 'admin' && (
          <>
            <label>Category (for Admins)</label>
            <select name="category" value={form.category} onChange={handleChange}>
              <option value="">Select Category</option>
              <option value="plumbing">Plumbing</option>
              <option value="carpentry">Carpentry</option>
              <option value="electrical">Electrical</option>
              <option value="painting">Painting</option>
              <option value="cleaning">Cleaning</option>
              <option value="mason">Mason</option>
            </select>
            {errors.category && <p className="error">{errors.category}</p>}
          </>
        )}

        <button type="submit" className="signup-btn">Create Account</button>
      </form>
    </div>
  );
};

export default SignupPage;
