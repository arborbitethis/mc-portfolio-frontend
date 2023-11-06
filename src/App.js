import React from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import RecipePage from './components/RecipePage';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/recipes" element={<RecipePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
