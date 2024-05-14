import React from 'react';

import { Link } from 'react-router-dom';
import './index.css'

const ThumbnailCard = ({ imageUrl, title, channelName, views }) => {
  return (
    <div className="thumbnail-card">
      <Link to="/Videopage" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="image-container">
          <img
            src={imageUrl}
            alt={title}
            className="thumbnail-image"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <div className="red-line"></div>
        </div>
        <div className="thumbnail-text">
          <h5 className="thumbnail-title">{title}</h5>
          <p className="thumbnail-channel">{channelName}</p>
          <p className="thumbnail-views">{views} views</p>
          <p className="thumbnail-views">visto</p>
        </div>
      </Link>
    </div>
  );
}

export default ThumbnailCard;
