import React from "react";
import styled from "styled-components";

function ProfilePagePreLoader() {
  return (
    <Wrapper>
      <div className="page-container">
        <nav className="navigation-bar skeleton"></nav>
        <div className="content-wrapper">
          <div className="content-box skeleton"></div>
          <div className="content-box skeleton"></div>
          <div className="content-box skeleton"></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProfilePagePreLoader;

const Wrapper = styled.div`
  .page-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .skeleton {
    background-color: #f1f1f1;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .navigation-bar {
    height: 60px;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
  }

  .content-box {
    height: 80px;
    width: 100%;
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
