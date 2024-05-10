import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


import Home from './pages/navbar.js'; // Importing the ToggleSidebar component
import Shorts from './pages/Shorts.js'; // Importing the Shorts component
import Subs from './pages/Subs.js';
import Canal from './pages/Teucanal.js';
import History from './pages/History.js';
import Repo from'./pages/repolist.js';


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shorts" element={<Shorts />} />
        <Route path="/Subs" element={<Subs />} />
        <Route path="/Canal" element={<Canal />} />
        <Route path="/history" element={<History />} />
        <Route path="/Repo" element={<Repo/>} />

        {/* Other routes */}
      </Routes>
    
  );
}


export default App;
