import styled from "styled-components";

const Wrapper = styled.div`
  > .wishlist {
    cursor: pointer;
    z-index: 100;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    position: absolute;
    right: 10%;
    top: 5%;
  }
`;

export default Wrapper;
