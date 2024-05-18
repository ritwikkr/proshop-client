import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  > button {
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    margin: auto;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    font-size: 16px;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export default Wrapper;
