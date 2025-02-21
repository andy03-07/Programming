import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/signup.css';

const SignupPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    role: 'user',
    category: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.password) newErrors.password = 'Password is required';
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (form.role === 'admin' && (!form.category || form.category.length === 0)) {
      newErrors.category = 'Category is required for Admin role';
    }
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      try {
        const userData = {
          ...form,
          category: form.role === "admin" ? form.category : undefined,
        };
  
        const response = await axios.post('http://localhost:5000/api/register', userData);
  
        if (response.status === 201) { 
          alert('Account created successfully!');
          console.log(userData);
          navigate('/login');
        } else {
          console.error('Unexpected response status:', response.status);
        }
      }  catch (error) {
        console.error('Error during signup:', error);
        if (error.response) {
          console.error('Server Response:', error.response.data);
          setErrors({ form: error.response.data.message || "Something went wrong!" });
        } else {
          console.error('Unknown error:', error);
        }
      }
    }
  };

  const loginclick = () => {
    navigate('/login');
  }
  

  return (
    <div className="signup-container">
      <h2 style={{color:'black',marginTop:'0px',paddingBottom:'20px'}}>Create Account</h2>
      <form onSubmit={handleSubmit}>

        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

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

        <label style={{marginBottom:'5px'}}>Role</label>
        <select name="role" value={form.role} onChange={handleChange} style={{height:'25px',borderRadius:'5px',color:'white',backgroundColor:'#435a83'}}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {form.role === 'admin' && (
          <>
            <label>Category (for Admins)</label>
            <select name="category" value={form.category} onChange={handleChange} style={{height:'25px',borderRadius:'5px',color:'white',backgroundColor:'#435a83',marginTop:'10px'}}>
              Role
              <option value="">Select Category</option>
              <option value="plumber">Plumber</option>
              <option value="carpenter">Carpenter</option>
              <option value="electrician">Electrician</option>
              <option value="painter">Painter</option>
              <option value="cleaner">Cleaner</option>
              <option value="mason">Mason</option>
            </select>
            {errors.category && <p className="error">{errors.category}</p>}
          </>
        )}
         <p style={{color:'red',fontWeight:'700',marginTop:'10px'}}>{errors.form}</p>
        <button type="submit" className="signup-btn">Create Account</button>
      </form>
      <p>Already Have an Account ? <button type='submit' className="login-btn" onClick={loginclick}>Login</button></p> 
    </div>
    
  );
};

export default SignupPage;
