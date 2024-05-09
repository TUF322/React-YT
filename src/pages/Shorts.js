import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './bg-yt-logo.png';
import userIcon from './userimg.png';
import hamburgerBtn from './hamburger-btn2.png';
import upbutton from './upbutton.png';
import Downbutton from './downbutton.png';
import like from './likebutton.png';
import dislike from './dislikebutton.png';
import commentbutton from './commentbutton.png';

import Short1 from './min1.jpg';
import Short2 from './min2.jpg';
import Short3 from './min3.jpeg';
import Short4 from './min4.jpg';
import Short5 from './min5.jpg';
import Short6 from './min6.jpg';
import Short7 from './min7.jpg';
import Short8 from './min8.jpg';
import Short9 from './min9.png';
import Short10 from './min10.jpeg';
import Short11 from './min11.jpeg';
import Short12 from './min12.jpeg';

import './index.css';

const Shorts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Short1, Short2, Short3, Short4, Short5, Short6, Short7, Short8, Short9, Short10, Short11, Short12]; // Add more images as needed

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleDownClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleUpClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
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
              <li className="sd-button">Inicio</li>

              {/* Correctly use Link component */}
              <li className="sd-button">
                <Link to="/Shorts">Shorts</Link>
              </li>
              <li className="sd-button">Suscripciones</li>
              <li className="separator"></li>
              <li className="sd-subh">Tu »</li>
              <li className="sd-button">Teu Canal</li>
              <li className="sd-button">Historial</li>
              <li className="sd-button">Lista de reproduções</li>
              <li className="sd-button">Meus Videos</li>
              <li className="sd-button">Ver más tarde</li>
              <li className="sd-button">Vídeos que Gostaste</li>
              <li className="separator"></li>
              <li className="sd-subh">Suscripciones</li>
              <li className="sd-susc" >
                BrainRot
              </li>
              <li className="sd-susc" >
                PEPE
              </li>
              <li className="sd-susc" >
                Joãosinho gaming
              </li>
              {/* Other sidebar items... */}
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="shorts-container">
        <div className="shorts">
          <div className="darker-area">
            <div className="phone-size-container">
              <div className="vertical-img-placeholder">
                <img src={images[currentImageIndex]} alt="Vertical Image" />
              </div>
            </div>
            <div className="buttons-container">
              <button className="button"><img src={like} alt="Like" /></button>
              <button className="button"><img src={dislike} alt="Dislike" /></button>
              <button className="button"><img src={commentbutton} alt="Comment" /></button>
              <button className="button" onClick={handleUpClick}><img src={upbutton} alt="Up" /></button>
              <button className="button" onClick={handleDownClick}><img src={Downbutton} alt="Down" /></button>
            </div>
            <div className="user-image-container">
              <img src={userIcon} alt="User Image" className="user-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shorts;
