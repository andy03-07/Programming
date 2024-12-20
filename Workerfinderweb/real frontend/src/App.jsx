// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';  // Import the Provider from react-redux
import store from './redux/store';  // Import your Redux store
import HomePage from './pages/Home';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import UserProfile from './pages/UserProfile';
import WorkerListPage from './pages/WorkerListPage'; 
import PlumbingPage from './pages/Workers/PlumbingPage';
import AdminPlumbingPage from './pages/Admin/AdminPlumbingPage';
import CarpentryPage from './pages/Workers/CarpentryPage';
import AdminCarpentryPage from './pages/Admin/AdminCarpentryPage';
import CleaningPage from './pages/Workers/CleaningPage';
import AdminCleaningPage from './pages/Admin/AdminCleaningPage';
import ElectricianPage from './pages/Workers/ElectricianPage';
import AdminElectricianPage from './pages/Admin/AdminElectricianPage';
import MasonPage from './pages/Workers/MasonPage';
import AdminMasonPage from './pages/Admin/AdminMasonPage';
import PaintingPage from './pages/Workers/PaintingPage';
import AdminPaintingPage from './pages/Admin/AdminPaintingPage';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute to guard routes

function App() {
    return (
        <Provider store={store}>  {/* Wrap the application with Provider */}
            <Router>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/profile" element={<UserProfile />} />

                    {/* Protected Routes (Admin only) */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="/admin/plumbing" element={<AdminPlumbingPage />} />
                        <Route path="/admin/carpentry" element={<AdminCarpentryPage />} />
                        <Route path="/admin/painting" element={<AdminPaintingPage />} />
                        <Route path="/admin/mason" element={<AdminMasonPage />} />
                        <Route path="/admin/cleaning" element={<AdminCleaningPage />} />
                        <Route path="/admin/electrician" element={<AdminElectricianPage />} />
                    </Route>

                    {/* Worker Category Pages for Users */}
                    <Route path="/plumbing" element={<PlumbingPage />} />
                    <Route path="/carpentry" element={<CarpentryPage />} />
                    <Route path="/painting" element={<PaintingPage />} />
                    <Route path="/mason" element={<MasonPage />} />
                    <Route path="/cleaning" element={<CleaningPage />} />
                    <Route path="/electrician" element={<ElectricianPage />} />

                    {/* Worker Listing Page */}
                    <Route path="/workers/:category" element={<WorkerListPage />} />
                </Routes>
            </Router>
        </Provider>  
    );
}

export default App;
