import React, { useState } from 'react';
import logo from './bg-yt-logo.png';
import userIcon from './userimg.png';
import hamburgerBtn from './hamburger-btn2.png';
import TagsRow from './TagsRow';
import ThumbnailCard from './ThumbnailCard';
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

// Function to generate a random number between min and max
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const title = 'Loren ipsum';
const title2 = 'GTA V';
const title3 = 'CS2';
const channel = 'Joãosinho gaming';
const channel2 = 'PEPE';
const channel3 = 'BrainRot';

const thumbnailData = [
  {
    imageUrl: min1,
    title: title2,
    channelName: channel2,
    views: getRandomNumber(100, 1000000000).toLocaleString()
  },
  {
    imageUrl: min2,
    title: title,
    channelName: channel2,
    views: getRandomNumber(1, 100).toLocaleString()
  },
  {
    imageUrl: min3,
    title: title,
    channelName: channel,
    views: getRandomNumber(100, 1000000000).toLocaleString()
  },
  {
    imageUrl: min4,
    title: title3,
    channelName: channel,
    views: getRandomNumber(100, 1000000000).toLocaleString()
  },
  {
    imageUrl: min5,
    title: title2,
    channelName: channel3,
    views: getRandomNumber(100, 1000000000).toLocaleString()
  },
  {
    imageUrl: min6,
    title: title3,
    channelName: channel,
    views: getRandomNumber(100, 1000000000).toLocaleString()
  },
  {
    imageUrl: min7,
    title: title,
    channelName: channel,
    views: getRandomNumber(100, 1000000000).toLocaleString()
  },
  {
    imageUrl: min8,
    title: title,
    channelName: channel2,
    views: getRandomNumber(100, 1000000000).toLocaleString()
  },
  {
    imageUrl: min9,
    title: title2,
    channelName: channel,
    views: getRandomNumber(100, 1000000000).toLocaleString()
  },
  {
    imageUrl: min10,
    title: title,
    channelName: channel3,
    views: getRandomNumber(100, 1000000000).toLocaleString()
  },
  {
    imageUrl: min11,
    title: title3,
    channelName: channel3,
    views: getRandomNumber(100, 1000000000).toLocaleString()
  },
  {
    imageUrl: min12,
    title: title2,
    channelName: channel,
    views: getRandomNumber(100, 1000000000).toLocaleString()
  },
  // Add more thumbnail data...
];

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
    const filtered = thumbnailData.filter(data =>
      data.title.toLowerCase().includes(query.toLowerCase()) ||
      data.channelName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredThumbnails(filtered);
  };

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    filterThumbnails(tag);
  };

  const refreshPage = () => {
    window.location.reload();
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
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSidebar}
        >
          <img src={hamburgerBtn} alt="hamburger button" style={{ width: '30px', height: '30px' }} />
        </button>

        <div className={`collapse navbar-collapse ${sidebarOpen ? 'show' : ''}`}>
          <form className="form-inline my-2 my-lg-0 mx-auto">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
          <ul className="navbar-nav ml-auto">
            <li>
              <p className='user-name'>User@gmail.com</p>
            </li>
            <li className="nav-item" style={{ paddingLeft: "14px", paddingTop: "14px" }}>
              <img src={userIcon} alt="user icon" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
            </li>
          </ul>
        </div>
        <div>
          {/* Sidebar Overlay */}
          <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
          {/* Sidebar */}
          <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
            <h2 className='sd-header'>Menu</h2>
            <ul>
              <li className='sd-button' onClick={refreshPage}>Inicio</li>
              
              <li className='sd-button'>Shorts</li>
              <li className='sd-button'>Suscripciones</li>
              <li className='separator'></li>
              <li className='sd-subh'>Tu »</li>
              <li className='sd-button'>Teu Canal</li>
              <li className='sd-button'>Historial</li>
              <li className='sd-button'>Lista de reproduções</li>
              <li className='sd-button'>Meus Videos</li>
              <li className='sd-button'>Ver más tarde</li>
              <li className='sd-button'>Vídeos que Gostaste</li>
              <li className='separator'></li>
              <li className='sd-subh'>Suscripciones</li>
              <li className='sd-susc' onClick={() => handleTagClick('BrainRot')}>BrainRot</li>
              <li className='sd-susc' onClick={() => handleTagClick('PEPE')}>PEPE</li>
              <li className='sd-susc' onClick={() => handleTagClick('Joãosinho gaming')}>Joãosinho gaming</li>
              {/* Other sidebar items... */}
            </ul>
          </div>
        </div>
      </nav>
      <TagsRow handleTagClick={handleTagClick} />
      <div className="thumbnail-container">
        {filteredThumbnails.map((data, index) => (
          <ThumbnailCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
