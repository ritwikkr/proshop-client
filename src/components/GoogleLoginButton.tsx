import React from "react";
import styled from "styled-components";

import { FaGoogle } from "react-icons/fa";

const GoogleLoginButton = () => {
  const handleLogin = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  return (
    <Wrapper>
      <button onClick={handleLogin}>
        <FaGoogle />
        Sign in with Google
      </button>
    </Wrapper>
  );
};

export default GoogleLoginButton;

const Wrapper = styled.div`
  height: 40px;
  > button {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: transparent;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; // To add space between text and image
  }

  img {
    height: 20px;
  }
`;
