// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);  // Default to null, meaning no user is logged in
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if the user is logged in on component mount (e.g., check local storage or cookies)
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));  // Parse and set user data if it exists
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));  // Store user data in localStorage
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');  // Remove user data from localStorage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);  // Ensure you are accessing the context here
};

