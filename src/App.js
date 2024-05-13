import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


import Home from './pages/navbar.js'; // Importing the ToggleSidebar component
import Shorts from './pages/Shorts.js'; // Importing the Shorts component
import Subs from './pages/Subs.js';
import Canal from './pages/Teucanal.js';
import History from './pages/History.js';
import Repo from'./pages/repolist.js';
import Later from'./pages/vermástarde.js';
import Likes from './pages/likes.js';
import Meusvideos from './pages/Meus-videos.js';
import VideoPage from './pages/video.js';



const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shorts" element={<Shorts />} />
        <Route path="/Subs" element={<Subs />} />
        <Route path="/Canal" element={<Canal />} />
        <Route path="/history" element={<History />} />
        <Route path="/Repo" element={<Repo/>} />
        <Route path="/Later" element={<Later/>} />
        <Route path="/Likes" element={<Likes/>} />
        <Route path="/Meus_Videos" element={<Meusvideos/>} />
        <Route path="/Videopage" element={<VideoPage/>} />

        {/* Other routes */}
      </Routes>
    
  );
}


export default App;
