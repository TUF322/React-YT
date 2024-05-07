import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToggleSidebar from './pages/navbar.js'; // Importing the ToggleSidebar component
import Shorts from './pages/Shorts.js'; // Importing the Shorts component

const App = () => {
  return (
    <>
       <Routes>
          <Route path="/" element={<ToggleSidebar />} />
          <Route path="/Shorts" element={<Shorts />} />
          <Route path="/about" element={<About />} />
       </Routes>
    </>
  );
}

export default App;
