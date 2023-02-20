import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background-color: #f2f2f2;
  animation: ${slideUp} 1s ease forwards 3s;
`;

const LoadingText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingText>Loading.....</LoadingText>
      {/* <Spinner /> */}
    </LoaderContainer>
  );
};


export default Loader