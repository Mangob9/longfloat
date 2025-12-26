import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import WrityPage from './pages/WrityPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/wriety" element={<WrityPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
