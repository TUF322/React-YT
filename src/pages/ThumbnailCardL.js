import React from 'react';
import like from './likeico2-removebg-preview.png'
import { Link } from 'react-router-dom';

const ThumbnailCard = ({ imageUrl, title, channelName, views }) => {
  return (
    <div className="thumbnail-card">
      <Link to="/Videopage" style={{ textDecoration: 'none', color: 'inherit' }}>
      <img
        src={imageUrl}
        alt={title}
        className="thumbnail-image"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <div className="thumbnail-text">
        <h5 className="thumbnail-title">{title}</h5>
        <p className="thumbnail-channel">{channelName}</p>
        <p className="thumbnail-views">{views} views</p>
        <img src={like} style={{ width: "20px", height: "20px" }}/> {/* Corrected style */}
      </div>
      </Link>
    </div>
  );
}

export default ThumbnailCard;
