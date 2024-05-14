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

const buttonStyle = {
  backgroundColor: '#100c0c',
  color: 'white',
  height: '40px',
  width: '40px',
  borderRadius: '15px',
  marginRight: '10px',
  marginBottom: '15px' // Adjust as needed
};

const iconStyle = {
  height: '30px',
  width: '30px',
  borderRadius: '15px',
  marginRight:'25px'
};


const Shorts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likeCount, setLikeCount] = useState(0); // State for total likes
  const [dislikeCount, setDislikeCount] = useState(0); // State for total dislikes
  const [commentCount, setCommentCount] = useState(3);
  const [commentSidebarOpen, setCommentSidebarOpen] = useState(false);
  const [commentValue, setCommentValue] = useState('');
  const [UserValue, setUserValue] = useState('Tu');
  const [comments, setComments] = useState([
    { user: 'User1', comment: 'Great video!', likes: 0, dislikes: 0 },
    { user: 'User2', comment: 'Interesting content.', likes: 0, dislikes: 0 },
    { user: 'User3', comment: 'Love it!', likes: 0, dislikes: 0 }
  ]);
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

  const handleLikeClick = (index) => {
    const updatedComments = [...comments];
    if (updatedComments[index]) {
      if (updatedComments[index].likes === 0) {
        updatedComments[index].likes = 1;
        setLikeCount((prevCount) => prevCount + 1); // Increment total likes
        if (updatedComments[index].dislikes === 1) {
          updatedComments[index].dislikes = 0;
          setDislikeCount((prevCount) => prevCount - 1); // Decrement total dislikes
        }
      } else {
        updatedComments[index].likes = 0;
        setLikeCount((prevCount) => prevCount - 1); // Decrement total likes
      }
      setComments(updatedComments);
    }
  };

  const handleDislikeClick = (index) => {
    const updatedComments = [...comments];
    if (updatedComments[index]) {
      if (updatedComments[index].dislikes === 0) {
        updatedComments[index].dislikes = 1;
        setDislikeCount((prevCount) => prevCount + 1); // Increment total dislikes
        if (updatedComments[index].likes === 1) {
          updatedComments[index].likes = 0;
          setLikeCount((prevCount) => prevCount - 1); // Decrement total likes
        }
      } else {
        updatedComments[index].dislikes = 0;
        setDislikeCount((prevCount) => prevCount - 1); // Decrement total dislikes
      }
      setComments(updatedComments);
    }
  };

  const handleCommentClick = () => {
    setCommentSidebarOpen((prevState) => !prevState); // Toggle comment sidebar
  };

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  const handleSendComment = () => {
    if (commentValue.trim() !== '') {
      const newComment = { user: UserValue, comment: commentValue, likes: 0, dislikes: 0 };
      setComments((prevComments) => [...prevComments, newComment]);
      setCommentValue('');
      setUserValue('Tu');
      setCommentCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className={`main-container ${sidebarOpen ? 'sidebar-active' : ''}`}>
      {/* Navigation bar */}
      <nav className={`navbar navbar-expand-lg navbar-dark  ${sidebarOpen ? 'sidebar-active' : ''}`}>
        {/* Hamburger button */}
        <button className="btn btn-outline-lightgray" onClick={toggleSidebar}>
          {sidebarOpen ? (
            <img src={hamburgerBtn} alt="close sidebar" style={{ width: 'auto', height: 'auto' }} />
          ) : (
            <img src={hamburgerBtn} alt="open sidebar" style={{ width: 'auto', height: 'auto' }} />
          )}
        </button>
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" />
        </a>
        {/* Hamburger button */}
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
              style={{ width: '500px', borderRadius: '5px' }}
            />
          </form>
          {/* User info */}
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
          <div>
          {/* Sidebar Overlay */}
          <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
          {/* Sidebar */}
          <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
            <h2 className="sd-header">Menu</h2>
            <ul>
              <li className="sd-button">
                <Link to="/" style={{ color: "#fff" }}>Inicio</Link>
              </li>
              {/* Correctly use Link component */}
              <li className="sd-button">
                <Link to="/Shorts" style={{ color: "#f70505" }}>Shorts</Link>
              </li>
              <li className="sd-button">
                <Link to="/Subs" style={{ color: "#fff" }}>Suscripciones</Link>
              </li>
              <li className="separator"></li>
              <li className="sd-subh">Tu »</li>
              <li className="sd-button">
                <Link to="/Canal" style={{ color: "#fff" }}>Teu Canal</Link>
              </li>
              <li className="sd-button">
                <Link to="/history" style={{ color: "#fff" }}>Historial</Link>
              </li>
              <li className="sd-button">
                <Link to="/Repo" style={{ color: "#fff" }}>Lista de reproduções</Link>
              </li>
              <li className="sd-button">
                <Link to="/Meus_videos" style={{ color: "#fff" }}>Meus Videos</Link>
              </li>
              <li className="sd-button">
                <Link to="/Later" style={{ color: "#fff" }}>Ver más tarde</Link>
              </li>
              <li className="sd-button">
                <Link to="/Likes" style={{ color: "#fff" }}>Vídeos que Gostaste</Link>
              </li>
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
        </div>
      </nav>

      {/* Short content */}
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
              {/* Like button */}
              <button className="button" onClick={() => handleLikeClick(currentImageIndex)}>
                <img src={like} alt="Like" style={{borderRadius:'15px'}}/>
                <br />
                <span style={{ color: "#fff" }}>{likeCount}</span>
              </button>
              {/* Dislike button */}
              <button className="button" onClick={() => handleDislikeClick(currentImageIndex)}>
                <img src={dislike} alt="Dislike" />
                <br />
                <span style={{ color: "#fff" }}>{dislikeCount}</span>
              </button>
              {/* Comment button */}
              <button className="button" onClick={handleCommentClick}><img src={commentbutton} alt="Comment" />
                <br />
                <span style={{ color: "#fff" }}>{commentCount}</span>
              </button>
              {/* Up button */}
              <button className="button" onClick={handleUpClick}><img src={upbutton} alt="Up" /></button>
              {/* Down button */}
              <button className="button" onClick={handleDownClick}><img src={downbutton} alt="Down" /></button>
              {/* User image */}
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
    {/* Like button */}
    <button 
      onClick={() => handleLikeClick(index)} 
      style={buttonStyle}
    >
      <img src={like} alt="Like" style={iconStyle} />
      <span>{comment.likes}</span>
    </button>
    {/* Dislike button */}
    <button 
      onClick={() => handleDislikeClick(index)} 
      style={buttonStyle}
    >
      <img src={dislike} alt="Dislike" style={iconStyle} />
      <span>{comment.dislikes}</span>
    </button>
  </div>
))}

            {/* Comment input */}
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
