import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hello from './components/Hello';
import Popupmodal from './components/Popupmodal';
import Loderui from './components/Loderui';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/Popupmodal" element={<Popupmodal />} />
      <Route path="/Loderui" element={<Loderui />} />

      
    </Routes>
  </Router>
  );
}

export default App;
