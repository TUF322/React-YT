import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './yt-logo.png';
import userIcon from './user_img.png'; // Example user icon

const Navbar = () => {
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
          <li className="nav-item mx-auto"> {/* mx-auto to center the content */}
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</li>

        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <img src={userIcon} alt="user icon" style={{ width: '30px', height: '30px', borderRadius: '50%' }}></img>
            
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
