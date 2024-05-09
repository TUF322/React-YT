import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './bg-yt-logo.png';
import userIcon from './userimg.png';
import hamburgerBtn from './hamburger-btn2.png';
import TagsRow from './TagsRow';
import ThumbnailCard from './ThumbnailCard';
import Short1 from './min1.jpg';


import './index.css';

const Shorts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
  <div className="shorts"> {/* Apply the .shorts class to this div */}
    <div className="darker-area">
      <div className="phone-size-container">
        <div className="vertical-img-placeholder">
          {/* Placeholder for vertical image */}
          {/* You can replace this with your actual image */}
          <img src={Short1} alt="Vertical Image" />
        </div>
      </div>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default Shorts;
