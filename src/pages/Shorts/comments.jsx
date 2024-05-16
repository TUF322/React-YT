import React from "react";
import styled from 'styled-components';

// Styled components for CommentSection
const CommentSidebar = styled.div`
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  padding-right: 15px;
  color: #fff;
`;

const CommentContent = styled.div`
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-top: 20px;
  max-height: 550px; /* Match the size of the dark area */
  width: 420px;
  overflow-y: auto; /* Add scroll bar when content exceeds max-height */
`;

const Comment = styled.div`
  margin-bottom: 10px;
  margin-top: 20px;
`;

const CommentInput = styled.div`
  margin-left: 5%;
  margin-top: 0.5%;
`;

const CommentInputText = styled.input`
  background-color: #151618;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 10px;
  width: calc(100% - 20px);
`;

const SendButton = styled.button`
  background-color: #f70505;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px 16px;
  width: calc(100% - 20px);
  margin-top: 10px;
`;

// Styled components for buttons
const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  margin-right: 10px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const ButtonIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 5px;
`;

const CommentSection = ({
  comments,
  handleLikeClick,
  handleDislikeClick,
  handleCommentChange,
  commentValue,
  handleSendComment,
  commentSidebarOpen,
}) => {
  return (
    <>
      {commentSidebarOpen && (
        <CommentSidebar>
          <h1 style={{paddingTop:'10px'}}>Comments</h1>
          <CommentContent>
            {comments.map((comment, index) => (
              <Comment key={index}>
                <p>
                  <strong>{comment.user}</strong>: {comment.comment}
                </p>
                <Button onClick={() => handleLikeClick(index)}>
                  <ButtonIcon src="/img/likebutton.png" alt="Like" />
                  <span>{comment.likes}</span>
                </Button>
                <Button onClick={() => handleDislikeClick(index)}>
                  <ButtonIcon src="/img/dislikebutton.png" alt="Dislike" />
                  <span>{comment.dislikes}</span>
                </Button>
              </Comment>
            ))}
          </CommentContent>
          <CommentInput>
            <CommentInputText
              type="text"
              placeholder="Tu"
              value={commentValue}
              onChange={handleCommentChange}
            />
            <SendButton onClick={handleSendComment}>Send</SendButton>
          </CommentInput>
        </CommentSidebar>
      )}
    </>
  );
};

export default CommentSection;
