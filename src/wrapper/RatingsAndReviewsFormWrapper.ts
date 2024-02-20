import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  > textarea {
    padding: 5px;
    width: 300px;
  }
  > button {
    width: 100px;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-top: 10px;
  }
`;

export default Wrapper;
