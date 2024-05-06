// TagsRow.js
import React from 'react';

const TagsRow = ({ handleTagClick }) => {
  const tags = ['GTA V', 'CS2', 'Loren ipsum', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10', 'Tag 11', 'Tag 12', 'Tag 13', 'Tag 14', 'Tag 15', 'Tag 16', 'Tag 17', 'Tag 18', 'Tag 19', 'Tag 20'];

  const handleTag = (tag) => {
    handleTagClick(tag);
  };

  return (
    <div className="tags-row">
      {tags.map((tag, index) => (
        <div key={index} className="card" onClick={() => handleTag(tag)}>
          <div className="card-body">
            <h5 className="card-title">{tag}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TagsRow;
