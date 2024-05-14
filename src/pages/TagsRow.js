import React from 'react';

const TagsRow = ({ handleTagClick }) => {
  const tags = ['GTA V', 'CS2', 'Loren ipsum'];

  // Create an array with 30 elements filled with random tags
  const filledTags = Array.from({ length: 30 }, () => tags[Math.floor(Math.random() * tags.length)]);

  const handleTag = (tag) => {
    handleTagClick(tag);
  };

  return (
    <div className="tags-row">
      {filledTags.map((tag, index) => (
        <div key={index} className="card" onClick={() => handleTag(tag)}>
          <div className="card-body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h5 className="card-title">{tag}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TagsRow;
