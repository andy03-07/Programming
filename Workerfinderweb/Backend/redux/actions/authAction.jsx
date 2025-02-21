
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
    const response = await axios.post('http://localhost:5000/api/login', userCredentials);

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
    const response = await axios.post('http://localhost:5000/api/register', userData);

    dispatch({
      type: SIGNUP,
      payload: response.data.user,
    });

    localStorage.setItem('user', JSON.stringify(response.data.user));

    dispatch({
      type: SET_ROLE,
      payload: userData.role,
    });

    if (userData.role === 'admin') {
      window.location.href = '/login';
    } else {
      window.location.href = '/home';
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

