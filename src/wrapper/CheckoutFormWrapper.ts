import styled from "styled-components";

const Wrapper = styled.div`
  width: 350px;
  form {
    padding: 10px;
    > h2 {
      margin: 20px 0;
    }
    > button {
      border: none;
      border-radius: 5px;
      width: 100%;
      height: 40px;
      margin-top: 40px;
      color: white;
      background-color: black;
      cursor: pointer;
      font-weight: 900;
      &:disabled {
        cursor: not-allowed;
      }
    }
  }
  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

export default Wrapper;
