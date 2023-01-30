import React from "react";
import styled from "styled-components";

function Alert({ msg, type = "success" }) {
  return (
    <Wrapper>
      <div className={`home ${type}`}>
        <p>{msg}</p>
      </div>
    </Wrapper>
  );
}

export default Alert;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  font-weight: bold;
  margin-bottom: 40px;
  .home {
    background-color: rgb(202, 229, 245);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .error {
    background-color: red;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
