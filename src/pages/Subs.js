import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './bg-yt-logo.png';
import userIcon from './userimg.png';
import hamburgerBtn from './hamburger-btn2.png';
import TagsRow from './TagsRow';
import ThumbnailCard from './ThumbnailCard';
import Shorts from './Shorts.js';
import './index.css';



const Subs = () => {
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
                <li className="sd-button">Teu Canal</li>
                <li className="sd-button">Historial</li>
                <li className="sd-button">Lista de reproduções</li>
                <li className="sd-button">Meus Videos</li>
                <li className="sd-button">Ver más tarde</li>
                <li className="sd-button">Vídeos que Gostaste</li>
                <li className="separator"></li>
                <li className="sd-subh">Canais</li>

        </ul>
    </div>
</div>
</nav>
</div>
    );
};

export default Subs;