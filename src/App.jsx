import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllCourses from './components/AllCourses';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import './App.css'
import  './components/Navbar.css';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Top menu bar */}
      <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="/full-stack-development" element={<FullStack />} />
        {/* <Route path="/destination/:cardId" element={<FullStack />} /> */}
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
  );
};

export default App;
