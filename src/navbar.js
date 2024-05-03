import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './yt-logo.png';
import userIcon from './user_img.png'; // Example user icon

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <img src={logo} alt="logo"></img>
          </li>
          <li className="nav-item d-flex justify-content-center align-items-center">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1100px', margin: 'center' }}>
              <form className="form-inline mx-auto">
                <div>
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
              </form>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <img src={userIcon} alt="user icon" style={{ width: '30px', height: '30px', borderRadius: '50%' }}></img>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light" onClick={toggleSidebar}>
              {sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
            </button>
          </li>
          
        </ul>
      </div>
      {sidebarOpen && (
        <div className="sidebar">
          {/* Your sidebar content goes here */}
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
