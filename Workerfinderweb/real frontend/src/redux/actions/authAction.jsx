// // src/redux/actions/authAction.js
// export const login = (userCredentials) => {
//   return {
//     type: 'LOGIN',
//     payload: userCredentials
//   };
// };

// export const logout = () => {
//   return {
//     type: 'LOGOUT'
//   };
// };

// export const signup = (userData) => {
//   return {
//     type: 'SIGNUP',
//     payload: userData,
//   };
// };

// src/redux/actions/authAction.js
import axios from 'axios';

// Action Types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const SET_ROLE = 'SET_ROLE';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// Action to login (with async operation using axios)
export const login = (userCredentials) => async (dispatch) => {
  try {
    // Make an API call to authenticate the user
    const response = await axios.post('http://localhost:5001/api/auth/login', userCredentials);

    // Dispatch login success action with received data (e.g., user info, token)
    dispatch({
      type: LOGIN,
      payload: response.data,
    });

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(response.data));

    // Redirect based on the user's role
    if (response.data.role === 'admin') {
      // Admin is redirected to their specific category page
      window.location.href = `/admin/${response.data.category}`; // Example: /admin/plumbing
    } else {
      // Regular user is redirected to the homepage
      window.location.href = '/home';
    }
  } catch (error) {
    console.error("Login error:", error);
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response ? error.response.data : "Login failed",
    });
  }
};

// Action to logout (synchronous)
export const logout = () => {
  // Clear the localStorage when logging out
  localStorage.removeItem('user');

  return {
    type: LOGOUT,
  };
};

// Action to handle signup with role (asynchronous)
export const signup = (userData) => async (dispatch) => {
  try {
    // Send signup data to backend for user registration
    const response = await axios.post('http://localhost:5001/api/auth/signup', userData);

    // Dispatch SIGNUP action with the received data (e.g., user info, token)
    dispatch({
      type: SIGNUP,
      payload: response.data,
    });

    // Store the newly created user data in localStorage
    localStorage.setItem('user', JSON.stringify(response.data));

    // Dispatch SET_ROLE action to set the role in the Redux store
    dispatch({
      type: SET_ROLE,
      payload: userData.role, // 'user' or 'admin'
    });

    // Redirect based on the role (admin or user)
    if (userData.role === 'admin' && userData.category) {
      // Redirect admin to their respective category page (e.g., /admin/plumbing)
      window.location.href = '/login';
      window.location.href = `/admin/${userData.category}`;
    } else {
      // Redirect user to login page after signup
      window.location.href = '/login';
    }
  } catch (error) {
    console.error("Signup error:", error);
    dispatch({
      type: SIGNUP_FAILURE,
      payload: error.response ? error.response.data : "Signup failed",
    });
  }
};

// Action to set role (used during signup)
export const setRole = (role) => {
  return {
    type: SET_ROLE,
    payload: role,
  };
};

