import React, { useState } from "react";
import upbutton from "../upbutton.png";
import downbutton from "../downbutton.png";
import like from "../likebutton.png";
import dislike from "../dislikebutton.png";
import commentbutton from "../commentbutton.png";
import Short1 from "../min1.jpg";
import Short2 from "../min2.jpg";
import Short3 from "../min3.jpeg";
import Short4 from "../min4.jpg";
import Short5 from "../min5.jpg";
import Short6 from "../min6.jpg";
import Short7 from "../min7.jpg";
import Short8 from "../min8.jpg";
import Short9 from "../min9.png";
import Short10 from "../min10.jpeg";
import Short11 from "../min11.jpeg";
import Short12 from "../min12.jpeg";
import "../index.css";
import userIcon from "../userimg.png";

const buttonStyle = {
  backgroundColor: "#100c0c",
  color: "white",
  height: "40px",
  width: "40px",
  borderRadius: "15px",
  marginRight: "10px",
  marginBottom: "15px", // Adjust as needed
};

const iconStyle = {
  height: "30px",
  width: "30px",
  borderRadius: "15px",
  marginRight: "25px",
};

const CommentSection = ({
  comments,
  handleLikeClick,
  handleDislikeClick,
  commentCount,
  handleCommentClick,
  commentSidebarOpen,
  handleCommentChange,
  commentValue,
  handleSendComment,
}) => {
  return (
    <>
      {commentSidebarOpen && (
        <div className="comment-sidebar">
          <div className="comment-content">
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <p>
                  <strong>{comment.user}</strong>: {comment.comment}
                </p>
                <button
                  onClick={() => handleLikeClick(index)}
                  style={buttonStyle}
                >
                  <img src={like} alt="Like" style={iconStyle} />
                  <span>{comment.likes}</span>
                </button>
                <button
                  onClick={() => handleDislikeClick(index)}
                  style={buttonStyle}
                >
                  <img src={dislike} alt="Dislike" style={iconStyle} />
                  <span>{comment.dislikes}</span>
                </button>
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
              <button className="send-button" onClick={handleSendComment}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentSection;
