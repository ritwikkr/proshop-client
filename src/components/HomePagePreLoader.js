import React from "react";
import styled from "styled-components";

function HomePagePreLoader() {
  return (
    <Wrapper>
      <div class="page-container">
        <div class="header skeleton"></div>
        <div class="banner skeleton"></div>
        <div class="content-wrapper">
          <div class="content-box skeleton"></div>
          <div class="content-box skeleton"></div>
          <div class="content-box skeleton"></div>
          {/* <!-- Add more content boxes as needed --> */}
        </div>
      </div>
    </Wrapper>
  );
}

export default HomePagePreLoader;

const Wrapper = styled.div`
  .page-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .skeleton {
    background-color: lightgray;
    border-radius: 8px;
    margin-bottom: 20px;
    animation: skeleton-loading 1s infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  .header {
    height: 60px;
  }

  .banner {
    height: 400px;
    position: relative;
    overflow: hidden;
  }

  .banner::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.9),
      transparent
    );
    animation: banner-shining 2s linear infinite;
  }

  @keyframes banner-shining {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
  }

  .content-box {
    height: 80px;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .content-box::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.9),
      transparent
    );
    animation: content-box-shining 2s linear infinite;
  }

  @keyframes content-box-shining {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;
