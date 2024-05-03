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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
            <form className="form-style" >
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
            <li className='nav-item'>
            <p className='user-name'>User@gmail.com</p>
            </li>
          <li className="nav-item" style={{margin:'14px'}}>
            
            <img src={userIcon} alt="user icon" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
          </li>
        </ul>
      </div>

      <button className="btn btn-outline-light" onClick={toggleSidebar}>
        {sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>

      {sidebarOpen && (
        <div className="sidebar active">
          <div className="sd-header">
            <h4 className="mb-0">Sidebar Header</h4>
            <div className="btn btn-primary" onClick={toggleSidebar}><i className="fa fa-times">X</i></div>
          </div>
          <div className="sd-body">
            <ul>
              <li><a className="sd-link">Menu Item 1</a></li>
              <li><a className="sd-link">Menu Item 2</a></li>
              <li><a className="sd-link">Menu Item 3</a></li>
              <li><a className="sd-link">Menu Item 4</a></li>
              <li><a className="sd-link">Menu Item 5</a></li>
              <li><a className="sd-link">Menu Item 6</a></li>
              <li><a className="sd-link">Menu Item 7</a></li>
              <li><a className="sd-link">Menu Item 8</a></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
