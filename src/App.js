import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


import Home from './pages/navbar.js'; // Importing the ToggleSidebar component
import Shorts from './pages/Shorts.js'; // Importing the Shorts component
import Subs from './pages/Subs.js';
import Canal from './pages/Teucanal.js';


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shorts" element={<Shorts />} />
        <Route path="/Subs" element={<Subs />} />
        <Route path="/Canal" element={<Canal />} />

        {/* Other routes */}
      </Routes>
    
  );
}


export default App;
