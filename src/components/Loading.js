import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <Wrapper>
      <div className="loader"></div>
    </Wrapper>
  );
}

export default Loading;

const Wrapper = styled.div`
  height: calc(100vh - 130px);
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    border: 2px solid blue;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
`;
