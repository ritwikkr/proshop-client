import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <p>Copyright &copy; ProShop</p>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  background-color: rgb(46, 50, 56);
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
