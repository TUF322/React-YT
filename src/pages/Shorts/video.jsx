import React, { useState } from "react";
import styled from 'styled-components';
import ShortControls from "./controls.jsx"; // Import the ShortControls component
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

export const ShortsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ShortsWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Change to column */
  align-items: center; /* Center horizontally */
  padding: 15px;
  text-align: center;
  font-size: 37px;
  background-color: #100c0c;
  color: #fff;
  height: 85vh;
`;

export const DarkerArea = styled.div`
  width: 480px;
  height: 820px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const PhoneSizeContainer = styled.div`
  width: 480px;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VerticalImagePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%; /* Adjust as needed */
`;

const VideoSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(3);
  const [commentSidebarOpen, setCommentSidebarOpen] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [UserValue, setUserValue] = useState("Tu");
  const [comments, setComments] = useState([
    { user: "User1", comment: "Great video!", likes: 0, dislikes: 0 },
    { user: "User2", comment: "Interesting content.", likes: 0, dislikes: 0 },
    { user: "User3", comment: "Love it!", likes: 0, dislikes: 0 },
  ]);

  const images = [
    Short1,
    Short2,
    Short3,
    Short4,
    Short5,
    Short6,
    Short7,
    Short8,
    Short9,
    Short10,
    Short11,
    Short12,
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
    // Your like logic here
    console.log("clicked");
  };

  const handleDislikeClick = (index) => {
    // Your dislike logic here
    console.log("clicked");
  };
  const handleCommentClick = () => {
    setCommentSidebarOpen((prevState) => !prevState);
  };

  return (
    <ShortsContainer>
      <ShortsWrapper>
        <DarkerArea>
          <PhoneSizeContainer>
            <VerticalImagePlaceholder>
              <Image src={images[currentImageIndex]} alt="Vertical Image" />
            </VerticalImagePlaceholder>
          </PhoneSizeContainer>
        </DarkerArea>
      </ShortsWrapper>
      <ShortControls
        handleLikeClick={handleLikeClick}
        handleDislikeClick={handleDislikeClick}
        handleUpClick={handleUpClick}
        handleDownClick={handleDownClick}
        handleCommentClick={handleCommentClick}
        likeCount={likeCount}
        dislikeCount={dislikeCount}
        commentCount={commentCount}
        commentSidebarOpen={commentSidebarOpen}
      />
    </ShortsContainer>
  );
};

export default VideoSection;
