import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
  > button {
    cursor: pointer;
    width: 100%;
    height: 40px;
    background-color: black;
    color: white;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export default Wrapper;
