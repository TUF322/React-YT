import React, { useState } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import VideoSection from "./video";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${({ commentSidebarOpen }) => commentSidebarOpen && `
    transform: translateX(50px);
  `}
`;

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 10px 16px;
  color: #fff;
  background-color: #100c0c;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 10px;
`;

export const Imagebutton = styled.img`
  width: 30px;
  height: 30px;
`;

const ShortControls = ({
  handleLikeClick,
  handleDislikeClick,
  handleUpClick,
  handleDownClick,
  handleCommentClick,
  likeCount,
  dislikeCount,
  commentCount,
  commentSidebarOpen
}) => {

  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);

  const handleLike = () => {
    if (!likeClicked) {
      handleLikeClick();
      setLikeClicked(true);
      setDislikeClicked(false); // Ensure only one button is active
    } else {
      // If already liked, toggle off
      handleLikeClick();
      setLikeClicked(false);
    }
  };
  
  const handleDislike = () => {
    if (!dislikeClicked) {
      handleDislikeClick();
      setDislikeClicked(true);
      setLikeClicked(false); // Ensure only one button is active
    } else {
      // If already disliked, toggle off
      handleDislikeClick();
      setDislikeClicked(false);
    }
  };

  return (
    <ButtonsContainer commentSidebarOpen={commentSidebarOpen}>
      <Button onClick={handleLike} disabled={likeClicked}>
        <Imagebutton src="/img/likebutton.png" alt="Like" />
        <br />
        <span style={{ color: "#fff" }}>{likeClicked ? 1 : likeCount}</span>
      </Button>
      <Button onClick={handleDislike} disabled={dislikeClicked}>
        <Imagebutton src="/img/dislikebutton.png" alt="Dislike" />
        <br />
        <span style={{ color: "#fff" }}>{dislikeClicked ? 1 : dislikeCount}</span>
      </Button>
      <Button onClick={handleUpClick}>
        <Imagebutton src="/img/upbutton.png" alt="Up" />
      </Button>
      <Button onClick={handleDownClick}>
        <Imagebutton src="/img/downbutton.png" alt="Down" />
      </Button>
      <Button onClick={handleCommentClick}>
        <Imagebutton src="/img/commentbutton.png" alt="Comment" />
        <br />
        <span style={{ color: "#fff" }}>{commentCount}</span>
      </Button>
    </ButtonsContainer>
  );
};

ShortControls.propTypes = {
  handleLikeClick: PropTypes.func.isRequired,
  handleDislikeClick: PropTypes.func.isRequired,
  handleUpClick: PropTypes.func.isRequired,
  handleDownClick: PropTypes.func.isRequired,
  handleCommentClick: PropTypes.func.isRequired,
  likeCount: PropTypes.number.isRequired,
  dislikeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  commentSidebarOpen: PropTypes.bool.isRequired
};

export default ShortControls;
