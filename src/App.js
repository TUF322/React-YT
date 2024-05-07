import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


import Home from './pages/navbar.js'; // Importing the ToggleSidebar component
import Shorts from './pages/Shorts.js'; // Importing the Shorts component


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shorts" element={<Shorts />} />

        {/* Other routes */}
      </Routes>
    
  );
}


export default App;
