import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './bg-yt-logo.png';
import userIcon from './userimg.png';
import hamburgerBtn from './hamburger-btn2.png';
import TagsRow from './TagsRow';
import ThumbnailCard from './ThumbnailCard';
import './index.css'; // Make sure to import the CSS file if needed
import min1 from './min1.jpg';
import min2 from './min2.jpg';
import min3 from './min3.jpeg';
import min4 from './min4.jpg';
import min5 from './min5.jpg';
import min6 from './min6.jpg';
import min7 from './min7.jpg';
import min8 from './min8.jpg';
import min9 from './min9.png';
import min10 from './min10.jpeg';
import min11 from './min11.jpeg';
import min12 from './min12.jpeg';
import pfp from './channel-user.png';
import like from './likebutton.png';
import dislike from './dislikebutton.png';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const fillThumbnails = () => {
  const thumbnailData = [];

  for (let i = 0; i < 10; i++) {
    const title = getRandomTitle();
    const channel = getRandomChannel();

    thumbnailData.push({
      imageUrl: getRandomImageUrl(),
      title: title,
      channelName: channel,
      views: getRandomNumber(1, 9000000).toLocaleString(),
    });
  }

  return thumbnailData;
};

const getRandomTitle = () => {
  const titles = ['Loren ipsum', 'GTA V', 'CS2'];
  return titles[Math.floor(Math.random() * titles.length)];
};

const getRandomChannel = () => {
  const channels = ['Joãosinho gaming', 'PEPE', 'BrainRot'];
  return channels[Math.floor(Math.random() * channels.length)];
};

const getRandomImageUrl = () => {
  const imageUrls = [min1, min2, min3, min4, min5, min6, min7, min8, min9, min10, min11, min12];
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
};

const Video = () => {

  const initialComments = [
    { text: "Maria@gmail.com: This is a great video!", likes: 0, dislikes: 0, likeClicked: false, dislikeClicked: false },
    { text: "João@gmail.com: I really enjoyed watching this.", likes: 0, dislikes: 0, likeClicked: false, dislikeClicked: false },
    { text: "Carlos@gmail.com: Keep up the good work!", likes: 0, dislikes: 0, likeClicked: false, dislikeClicked: false }
  ];
  

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredThumbnails, setFilteredThumbnails] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false); // State to track button click
  const [videoInfo, setVideoInfo] = useState({}); // State to track video info
  const [mainImageUrl, setMainImageUrl] = useState('');
  const [subscriptionCount, setSubscriptionCount] = useState(getRandomNumber(100, 10000000)); // Random initial subscription count
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(initialComments);
  const [videoLikes, setVideoLikes] = useState(0);
  const [videoDislikes, setVideoDislikes] = useState(0);
  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);

  

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSendComment = () => {
    if (comment.trim() !== '') {
      // Construct the comment with user email
      const newComment = `User@gmail.com: ${comment}`;
      setComments([...comments, { text: newComment, likes: 0, dislikes: 0, likeClicked: false, dislikeClicked: false }]);
      setComment('');
    }
  };

  const handleLike = () => {
    if (!likeClicked) {
      setVideoLikes(videoLikes + 1);
      setLikeClicked(true);
      setDislikeClicked(false);
      if (dislikeClicked) {
        setVideoDislikes(videoDislikes - 1);
      }
    } else {
      setVideoLikes(videoLikes - 1);
      setLikeClicked(false);
    }
  };
  
  const handleDislike = () => {
    if (!dislikeClicked) {
      setVideoDislikes(videoDislikes + 1);
      setDislikeClicked(true);
      setLikeClicked(false);
      if (likeClicked) {
        setVideoLikes(videoLikes - 1);
      }
    } else {
      setVideoDislikes(videoDislikes - 1);
      setDislikeClicked(false);
    }
  };

  const handleCommentLike = (index) => {
    const updatedComments = [...comments];
    const comment = updatedComments[index];
    if (!comment.likeClicked) {
      comment.likes += 1;
      comment.likeClicked = true;
      comment.dislikeClicked = false;
      // Reset dislikes if they were clicked previously
      comment.dislikes = 0;
    } else {
      comment.likes -= 1;
      comment.likeClicked = false;
    }
    setComments(updatedComments);
  };
  
  const handleCommentDislike = (index) => {
    const updatedComments = [...comments];
    const comment = updatedComments[index];
    if (!comment.dislikeClicked) {
      comment.dislikes += 1;
      comment.dislikeClicked = true;
      comment.likeClicked = false;
      // Reset likes if they were clicked previously
      comment.likes = 0;
    } else {
      comment.dislikes -= 1;
      comment.dislikeClicked = false;
    }
    setComments(updatedComments);
  };
  

  useEffect(() => {
    const thumbnailData = fillThumbnails();
    setFilteredThumbnails(thumbnailData);

    // Generate initial video info
    const initialInfo = generateVideoInfo();
    setVideoInfo(initialInfo);

    // Generate main image URL on component mount
    setMainImageUrl(getRandomImageUrl());
  }, []);

  const generateVideoInfo = () => {
    const title = getRandomTitle();
    const channel = getRandomChannel();
    const views = getRandomNumber(1, 9000000).toLocaleString();

    return {
      title: title,
      channelName: channel,
      views: views,
    };
  };

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
    // Increase or decrease subscription count based on button color
    if (buttonClicked) {
      setSubscriptionCount(subscriptionCount - 1);
    } else {
      setSubscriptionCount(subscriptionCount + 1);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterThumbnails(e.target.value);
  };

  const filterThumbnails = (query) => {
    const filtered = fillThumbnails().filter(
      (data) =>
        data.title.toLowerCase().includes(query.toLowerCase()) ||
        data.channelName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredThumbnails(filtered);
  };

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    filterThumbnails(tag);
  };

  const randomIframeUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Random URL for the iframe

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
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ width: '500px', borderRadius: '5px' }}
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
              <li className="sd-button">
                <Link to="/" style={{ color: "#f70505" }}>Inicio</Link>
              </li>
              {/* Correctly use Link component */}
              <li className="sd-button">
                <Link to="/Shorts" style={{ color: "#fff" }}>Shorts</Link>
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
              <li className="sd-susc" onClick={() => handleTagClick('BrainRot')}>
                BrainRot
              </li>
              <li className="sd-susc" onClick={() => handleTagClick('PEPE')}>
                PEPE
              </li>
              <li className="sd-susc" onClick={() => handleTagClick('Joãosinho gaming')}>
                Joãosinho gaming
              </li>
              {/* Other sidebar items... */}
            </ul>
          </div>
        </div>
      </nav>
      

      <div className="video-page-container">
        <div className="video-container">
          <div className="video-player">
            {/* Video display area */}
            <iframe src={randomIframeUrl} width="100%" margin-right="30px" borderRadius="15px" height={"600px"}  frameborder="0" allowfullscreen></iframe>
          </div>
          <div className="video-details">
            {/* Title and description */}
            <h1 className="video-title">{videoInfo.channelName} | {videoInfo.title}</h1>
            <img src={pfp} className='pfp' alt="Profile Picture" style={{ height: '70px', width: '70px' }} />
            <p className="video-views" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '10px', marginTop: '12px', marginRight: '10px' }}>{subscriptionCount}</p>
            <button className='send-button' onClick={handleButtonClick} style={{ backgroundColor: buttonClicked ? 'gray' : 'red' }}>Suscribirme</button><div style={{ display: 'inline-block', marginLeft: '10px' }}>
              <button onClick={handleLike} style={{backgroundColor:"#100c0c",borderRadius:'15px'}}>
                <img src={like} alt="like button" style={{ width: '30px', height: '30px' }} />
              </button>
              <span>{videoLikes}</span>
              <button onClick={handleDislike} style={{backgroundColor:"#100c0c",borderRadius:'15px'}}>
                <img src={dislike} alt="dislike button" style={{ width: '30px', height: '30px' }} />
              </button>
              <span>{videoDislikes}</span>
            </div>
            <p className="video-views">Views: {videoInfo.views}</p>
            <p className="video-description">
              This is a sample video description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed eget efficitur libero. Integer rutrum, nisi eget congue fermentum,
              dui felis cursus dolor, non eleifend quam nisi nec est.
            </p>
            
          </div>
          {/* New comment box */}
          <div className="comment-section">
            <h2>Comments</h2>
            <div>
              <input
                type="text"
                placeholder="Write a comment..."
                value={comment}
                onChange={handleCommentChange}
                style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
                className='form-control-mr-sm-2'
              />
              <button className="btn btn-primary" onClick={handleSendComment}>
                Send
              </button>
            </div>
            {/* Display stock comments */}
            <div className='comment-chat'>
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <div className="comment-text">
              <img src={userIcon} alt="User Icon" style={{ height: '30px', width: '30px', borderRadius: '15px', marginRight: '10px' }} /> 
              <span>{comment.text}</span>
            </div>
            <div className="comment-actions">
              <button className="comment-actions-buttons" style={{backgroundColor:"#100c0c", borderRadius:'15px'}} onClick={() => handleCommentLike(index)}>
                <img src={like} alt="like button" style={{ width: '20px', height: '20px' }} />
              </button>
              <span>{comment.likes}</span>
              <button className="comment-actions-buttons" style={{backgroundColor:"#100c0c", borderRadius:'15px', margin:'5px'}}  onClick={() => handleCommentDislike(index)}>
                <img src={dislike} alt="dislike button" style={{ width: '20px', height: '20px' }} />
              </button>
              <span>{comment.dislikes}</span>
            </div>
          </div>
        ))}
      </div>
          </div>
        </div>
        <div className="video-sidebar">
          {/* Thumbnail column */}
          {filteredThumbnails.map((data, index) => (
            <ThumbnailCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
