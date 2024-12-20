// src/redux/reducers/authReducer.js
const initialState = {
    user: null,
    isAuthenticated: false
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isAuthenticated: false
        };
    
       case 'SIGNUP': // Add case for signup
        return {
          ...state,
      user: action.payload,
      isAuthenticated: true,
    };
     default:
       return state;
}
  };
  
  export default authReducer;
  