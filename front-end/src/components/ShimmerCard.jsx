import React from 'react';
import styled, { keyframes } from 'styled-components';

// Shimmer effect animation
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const ShimmerCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col || 3}, 1fr); /* Make the column dynamic */
  margin-top: 30px;
  gap: 30px;
  row-gap: 50px;
`;

const ShimmerCard = styled.div`
  width: 100%;
  height: 320px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 8px;
`;

const ShimmerPostList = ({ col, row }) => {
  const shimmerItems = Array(row * col).fill(null);

  return (
    <ShimmerCardContainer col={col}>
      {shimmerItems.map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </ShimmerCardContainer>
  );
};

export default ShimmerPostList;
