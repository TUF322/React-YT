import React from 'react';

const ThumbnailCard = ({ imageUrl, title, channelName, views }) => {
  return (
    <div className="thumbnail-card">
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
        <p className="thumbnail-views">Visto</p> {/* Add 'Visto' text here */}
      </div>
    </div>
  );
}

export default ThumbnailCard;
