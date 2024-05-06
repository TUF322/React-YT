import React, { useState } from 'react';
import logo from './bg-yt-logo.png';
import userIcon from './userimg.png';
import hamburgerBtn from './hamburger-btn.png';
import TagsRow from './TagsRow'; // Import the TagsRow component
import ThumbnailCard from './ThumbnailCard'; // Import the ThumbnailCard component
import './index.css';
import min1 from './min1.jpg'

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Example data for thumbnail cards
  const thumbnailData = [
    {
      imageUrl: min1,
      title: 'Example Title 1',
      channelName: 'Channel 1',
      views: '1,000,000'
    },
    // Add more thumbnail data as needed
  ];

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${sidebarOpen ? 'sidebar-active' : ''}`}>
        <button className="btn btn-outline-light" onClick={toggleSidebar}>
          {sidebarOpen ? (
            <img src={hamburgerBtn} alt="close sidebar" style={{ width: '30px', height: '30px' }} />
          ) : (
            <img src={hamburgerBtn} alt="open sidebar" style={{ width: '30px', height: '30px' }} />
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
              <li className='sd-button'>Menu Item 1</li>
              <li className='sd-button'>Menu Item 2</li>
              <li className='sd-button'>Menu Item 3</li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Tags Row */}
      <TagsRow />

      {/* Thumbnail Cards */}
      <div className={`thumbnails-container ${sidebarOpen ? 'sidebar-active' : ''}`}>
        {thumbnailData.map((data, index) => (
          <ThumbnailCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
