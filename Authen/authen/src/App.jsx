import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signuppage from './components/signuppage';
import Login from './components/login';
import { UserContext } from './components/usercon';
import './App.css';

function App() {
  const [user, setUser] = useState({ username: '', password: '' });

  return (
    <>
    <UserContext.Provider value={{ user, setUser }}> 
      <Router>
        <Routes>
          <Route path="/" element={<Signuppage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  

    

    </>
  );
}

export default App;
