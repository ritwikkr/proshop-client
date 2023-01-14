import React from "react";
import styled from "styled-components";

function Alert({ msg }) {
  return (
    <Wrapper>
      <p>{msg}</p>
    </Wrapper>
  );
}

export default Alert;

const Wrapper = styled.div`
  text-align: center;
  width: 400px;
  padding: 10px;
  font-weight: bold;
  background-color: rgb(202, 229, 245);
`;
