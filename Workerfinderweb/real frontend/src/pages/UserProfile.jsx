import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch user data from backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log("Fetched token:", token);
        if (!token) {
          console.error('No token found');
          navigate('/login'); // Redirect if no token is found
          return;
        }
  
        const response = await axios.get('http://localhost:5001/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error.response ? error.response.data : error.message);
        if (error.response && error.response.status === 400) {
          console.log("Fetched token:", token);
          navigate('/login'); // Redirect if unauthorized
        }
      }
    };
  
    fetchUserData();
  }, [navigate]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  
  if (error) return <p>{error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>User Profile</h2>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      <div className="profile-details">
        <div className="profile-pic">
          <img src="/path/to/profile-logo.png" alt="Profile" />
        </div>
        <div className="profile-info">
          <h3>{user.fullName}</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Phone:</strong> {user.mobileNumber}</p>
          <p><strong>Country Code:</strong> {user.countryCode}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
