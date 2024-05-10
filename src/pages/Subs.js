import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './bg-yt-logo.png';
import userIcon from './userimg.png';
import hamburgerBtn from './hamburger-btn2.png';
import TagsRow from './TagsRow';
import ThumbnailCard from './ThumbnailCard';
import Shorts from './Shorts.js';
import './index.css';
import min1 from './min1.jpg';
import min2 from './min2.jpg';
import min3 from './min3.jpeg';
import min4 from './min4.jpg';
import min5 from './min5.jpg';
import min6 from './min6.jpg';
import min7 from './min7.jpg';
import min8 from './min8.jpg';
import min9 from './min9.png';
import min10 from './min10.jpeg';
import min11 from './min11.jpeg';
import min12 from './min12.jpeg';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const fillThumbnails = () => {
  const thumbnailData = [];

  for (let i = 0; i < 40; i++) {
    const title = getRandomTitle();
    const channel = getRandomChannel();

    thumbnailData.push({
      imageUrl: getRandomImageUrl(),
      title: title,
      channelName: channel,
      views: getRandomNumber(1, 9).toLocaleString(),
    });
  }

  return thumbnailData;
};

const getRandomTitle = () => {
  const titles = ['Loren ipsum', 'GTA V', 'CS2'];
  return titles[Math.floor(Math.random() * titles.length)];
};

const getRandomChannel = () => {
  const channels = ['Joãosinho gaming', 'PEPE', 'BrainRot'];
  return channels[Math.floor(Math.random() * channels.length)];
};

const getRandomImageUrl = () => {
  const imageUrls = [min1, min2, min3, min4, min5, min6, min7, min8, min9, min10, min11, min12];
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
};

const thumbnailData = fillThumbnails();

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredThumbnails, setFilteredThumbnails] = useState(thumbnailData);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterThumbnails(e.target.value);
  };

  const filterThumbnails = (query) => {
    const filtered = thumbnailData.filter(
      (data) =>
        data.title.toLowerCase().includes(query.toLowerCase()) ||
        data.channelName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredThumbnails(filtered);
  };

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    filterThumbnails(tag);
  };

  return (
    <div className={`main-container ${sidebarOpen ? 'sidebar-active' : ''}`}>
      <nav className={`navbar navbar-expand-lg navbar-dark  ${sidebarOpen ? 'sidebar-active' : ''}`}>
        <button className="btn btn-outline-lightgray" onClick={toggleSidebar}>
          {sidebarOpen ? (
            <img src={hamburgerBtn} alt="close sidebar" style={{ width: 'auto', height: 'auto' }} />
          ) : (
            <img src={hamburgerBtn} alt="open sidebar" style={{ width: 'auto', height: 'auto' }} />
          )}
        </button>
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
          <img src={hamburgerBtn} alt="hamburger button" style={{ width: '30px', height: '30px' }} />
        </button>

        <div className={`collapse navbar-collapse ${sidebarOpen ? 'show' : ''}`}>
          <form className="form-inline my-2 my-lg-0 mx-auto">
            <input
              className="form-control-mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              style={{width:"500px", borderRadius:"5px"}}
            />
          </form>
          <ul className="navbar-nav ml-auto">
            <li>
              <p className="user-name">User@gmail.com</p>
            </li>
            <li className="nav-item" style={{ paddingLeft: '14px', paddingTop: '14px' }}>
              <img src={userIcon} alt="user icon" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
            </li>
          </ul>
        </div>
        <div>
          {/* Sidebar Overlay */}
          <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
          {/* Sidebar */}
          <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
            <h2 className="sd-header">Menu</h2>
            <ul>
              <li className="sd-button"><Link to="/" style={{color:"#fff"}}>Inicio</Link></li>

              {/* Correctly use Link component */}
              <li className="sd-button">
                <Link to="/Shorts" style={{color:"#fff"}}>Shorts</Link>
              </li>
              <li className="sd-button"><Link to="/Subs" style={{color:"#f70505"}}>Suscripciones</Link></li>
              <li className="separator"></li>
              <li className="sd-subh">Tu »</li>
              <li className="sd-button"><Link to="/Canal" style={{color:"#fff"}}>Teu Canal</Link></li>
              <li className="sd-button"><Link to="/history" style={{color:"#fff"}}>Historial</Link></li>
              <li className="sd-button"><Link to="/Repo" style={{color:"#fff"}}>Lista de reproduções</Link></li>
              <li className="sd-button"><Link to="/Canal" style={{color:"#fff"}}>Meus Videos</Link></li>
              <li className="sd-button">Ver más tarde</li>
              <li className="sd-button">Vídeos que Gostaste</li>
              <li className="separator"></li>
              <li className="sd-subh">Canais</li>
              <li className="sd-susc" onClick={() => handleTagClick('BrainRot')}>
                BrainRot
              </li>
              <li className="sd-susc" onClick={() => handleTagClick('PEPE')}>
                PEPE
              </li>
              <li className="sd-susc" onClick={() => handleTagClick('Joãosinho gaming')}>
                Joãosinho gaming
              </li>
              {/* Other sidebar items... */}
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="thumbnail-container">
        {filteredThumbnails.map((data, index) => (
          <ThumbnailCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
