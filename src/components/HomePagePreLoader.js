import React from "react";
import styled from "styled-components";

function HomePagePreLoader() {
  return (
    <Wrapper>
      <div class="container">
        <div class="header skeleton"></div>
        <div class="banner skeleton"></div>
        <div class="content skeleton"></div>
        <div class="sidebar skeleton"></div>
      </div>
    </Wrapper>
  );
}

export default HomePagePreLoader;

const Wrapper = styled.div`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .skeleton {
    background-color: #f1f1f1;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .header {
    height: 60px;
  }

  .banner {
    height: 400px;
  }

  .content {
    height: 500px;
  }

  .sidebar {
    height: 500px;
    width: 300px;
  }

  @keyframes skeleton-loading {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
