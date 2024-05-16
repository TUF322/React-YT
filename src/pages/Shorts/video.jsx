import React, { useState } from "react";
import styled from 'styled-components';
import ShortControls from "./controls.jsx"; // Import the ShortControls component
import CommentSection from "./comments.jsx"; // Import the CommentSection component

const ShortsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const ShortsWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Change to column */
  align-items: center; /* Center horizontally */
  padding: 15px;
  text-align: center;
  font-size: 37px;
  background-color: #100c0c;
  color: #fff;
`;

const DarkerArea = styled.div`
  width: 480px;
  height: 820px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

const PhoneSizeContainer = styled.div`
  width: 480px;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VerticalImagePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%; /* Adjust as needed */
`;

const VideoSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [commentSidebarOpen, setCommentSidebarOpen] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [UserValue, setUserValue] = useState("Tu");
  const [comments, setComments] = useState([
    { user: "User1", comment: "Great video!", likes: 0, dislikes: 0 },
    { user: "User2", comment: "Interesting content.", likes: 0, dislikes: 0 },
    { user: "User3", comment: "Love it!", likes: 0, dislikes: 0 },
  ]);

  const images = [
    "/img/min1.jpg", "/img/min2.jpg", "/img/min3.jpeg", "/img/min4.jpg",
    "/img/min5.jpg", "/img/min6.jpg", "/img/min7.jpg", "/img/min8.jpg",
    "/img/min9.png", "/img/min10.jpeg", "/img/min11.jpeg", "/img/min12.jpeg",
  ];

  const handleDownClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleUpClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLikeClick = (index) => {
    // Check if comments array exists and index is within bounds
    if (comments && comments[index]) {
      // Create a copy of the comments array
      const newComments = [...comments];
      // Increment the likes count of the specified comment
      newComments[index].likes += 1;
      // Update the state with the modified comments array
      setComments(newComments);
    }
  };
  
  
  const handleDislikeClick = (index) => {
    // Check if comments array exists and index is within bounds
    if (comments && comments[index]) {
      // Create a copy of the comments array
      const newComments = [...comments];
      // Increment the dislikes count of the specified comment
      newComments[index].dislikes += 1;
      // Update the state with the modified comments array
      setComments(newComments);
    }
  };
  
  

  const handleCommentClick = () => {
    setCommentSidebarOpen((prevState) => !prevState);
  };

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  const handleSendComment = () => {
    // Add a new comment with the current user value and reset the input field
    const newComment = { user: UserValue, comment: commentValue, likes: 0, dislikes: 0 };
    setComments([...comments, newComment]);
    setCommentValue("");
  };

  return (
    <ShortsContainer>
      <ContentContainer>
        <ShortsWrapper>
          <DarkerArea>
            <PhoneSizeContainer>
              <VerticalImagePlaceholder>
                <Image src={images[currentImageIndex]} alt="Vertical Image" />
              </VerticalImagePlaceholder>
            </PhoneSizeContainer>
          </DarkerArea>
        </ShortsWrapper>
        <CommentSection
          comments={comments}
          handleLikeClick={handleLikeClick}
          handleDislikeClick={handleDislikeClick}
          commentCount={comments.length}
          handleCommentClick={handleCommentClick}
          commentSidebarOpen={commentSidebarOpen}
          handleCommentChange={handleCommentChange}
          commentValue={commentValue}
          handleSendComment={handleSendComment}
        />
      </ContentContainer>
      <ShortControls
        handleLikeClick={handleLikeClick}
        handleDislikeClick={handleDislikeClick}
        handleUpClick={handleUpClick}
        handleDownClick={handleDownClick}
        handleCommentClick={handleCommentClick}
        commentSidebarOpen={commentSidebarOpen}
      />
    </ShortsContainer>
  );
};

export default VideoSection;
