import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './bg-yt-logo.png';
import userIcon from './userimg.png';
import hamburgerBtn from './hamburger-btn2.png';
import upbutton from './upbutton.png';
import downbutton from './downbutton.png';
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
  const [likeCount, setLikeCount] = useState(100);
  const [dislikeCount, setDislikeCount] = useState(100);
  const [commentCount, setCommentCount] = useState(3);
  const [commentSidebarOpen, setCommentSidebarOpen] = useState(false);
  const [commentValue, setCommentValue] = useState('');
  const [UserValue, setUserValue] = useState('Tu');
  const [comments, setComments] = useState([{ user: 'User1', comment: 'Great video!' },
  { user: 'User2', comment: 'Interesting content.' },
  { user: 'User3', comment: 'Love it!' }]);
  const images = [
    Short1, Short2, Short3, Short4, Short5, Short6,
    Short7, Short8, Short9, Short10, Short11, Short12
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleDownClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleUpClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleLikeClick = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const handleDislikeClick = () => {
    setDislikeCount((prevCount) => prevCount + 1);
  };

  const handleCommentClick = () => {
    setCommentSidebarOpen((prevState) => !prevState); // Toggle comment sidebar
  };

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  const handleSendComment = () => {
    if (commentValue.trim() !== '') {
      const newComment = { user: UserValue, comment: commentValue };
      setComments((prevComments) => [...prevComments, newComment]);
      setCommentValue('');
      setUserValue('Tu');
      setCommentCount((prevCount) => prevCount + 1);
    }
  };

  const stockComments = [
    { user: 'User1', comment: 'Great video!' },
    { user: 'User2', comment: 'Interesting content.' },
    { user: 'User3', comment: 'Love it!' }
  ];

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
              style={{width:"500px", borderRadius:"15px"}}
              
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
              <li className="sd-buttonselected">
                <Link to="/Shorts" style={{color:"#f70505"}}>Shorts</Link>
              </li>
              <li className="sd-button"><Link to="/Subs" style={{color:"#fff"}}>Suscripciones</Link></li>
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
            {/* Short image */}
            <div className="phone-size-container">
              <div className="vertical-img-placeholder">
                <img src={images[currentImageIndex]} alt="Vertical Image" />
              </div>
            </div>
            {/* Buttons container */}
            <div className={`buttons-container ${commentSidebarOpen ? 'move-left' : ''}`}>
              <button className="button" onClick={handleLikeClick}>
                <img src={like} alt="Like" />
                <br />
                <span style={{ color: "#fff" }}>{likeCount}</span>
              </button>
              <button className="button" onClick={handleDislikeClick}>
                <img src={dislike} alt="Dislike" />
                <br />
                <span style={{ color: "#fff" }}>{dislikeCount}</span>
              </button>
              <button className="button" onClick={handleCommentClick}><img src={commentbutton} alt="Comment" />
                <br />
                <span style={{ color: "#fff" }}>{commentCount}</span>
              </button>
              <button className="button" onClick={handleUpClick}><img src={upbutton} alt="Up" /></button>
              <button className="button" onClick={handleDownClick}><img src={downbutton} alt="Down" /></button>
              <img src={userIcon} alt="User Image" className="user-image" style={{ marginLeft: "22px", marginTop: "20px" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Comment Sidebar */}
      {commentSidebarOpen && (
        <div className="comment-sidebar">
          <div className="comment-content">
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <p><strong>{comment.user}</strong>: {comment.comment}</p>
              </div>
            ))}
            <div className="comment-input">
              <input
                className="comment-input-text"
                type="text"
                placeholder="Tu"
                value={commentValue}
                onChange={handleCommentChange}
              />
              <button className="send-button" onClick={handleSendComment}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shorts;
