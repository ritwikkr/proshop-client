import React from "react";
import styled from "styled-components";

function ProfilePagePreLoader() {
  return (
    <Wrapper>
      <div className="page-container">
        <header className="header"></header>
        <header className="header"></header>
        <header className="header"></header>
        <header className="header"></header>
        <header className="header"></header>
        <header className="header"></header>
        <header className="header"></header>
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

  .header {
    height: 60px;
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: gray;
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
`;
