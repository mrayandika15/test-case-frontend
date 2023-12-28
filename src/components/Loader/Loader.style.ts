import styled, { keyframes } from 'styled-components';

// Define keyframe animation
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled component for the loader
export const LoaderWrapper = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;
