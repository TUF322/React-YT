import React, { useState } from 'react';
import logo from './bg-yt-logo.png';
import userIcon from './userimg.png'; // Example user icon
import './index.css'; // Import the CSS file for the Navbar component

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${sidebarOpen ? 'sidebar-active' : ''}`}>
      <a className="navbar-brand" href="#">
        <img src={logo} alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleSidebar} // Toggle the sidebar when the button is clicked
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${sidebarOpen ? 'show' : ''}`}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <form className="form-inline my-2 my-lg-0 mx-auto">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li>
            <p className='user-name'>User@gmail.com</p>
          </li>
          <li className="nav-item" style={{paddingLeft:"14px"}}>
            <img src={userIcon} alt="user icon" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
          </li>
        </ul>
      </div>

      <button className="btn btn-outline-light" onClick={toggleSidebar}>
        {sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>

      <div className=''>
      <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <h2 className='sd-header'>sidebar Header</h2>
        <ul>
          <li className='sd-button'>Menu Item 1</li>
          <li className='sd-button'>Menu Item 2</li>
          <li className='sd-button'>Menu Item 3</li>
        </ul>
      </div>

      </div>

      
    </nav>
  );
}

export default Navbar;
