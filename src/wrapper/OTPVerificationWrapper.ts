import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  margin: 130px auto;
  text-align: center;
  > .content {
    padding: 20px;
    > .heading {
      margin-bottom: 20px;
    }
    > .body {
      > form {
        > .form-content {
          margin-bottom: 20px;
          > input {
            width: 100%;
            height: 40px;
            font-size: 20px;
            outline: none;
            padding-left: 5px;
          }
          > button {
            cursor: pointer;
            height: 40px;
            width: 100%;
            margin: auto;
          }
        }
      }
    }
  }
`;

export default Wrapper;
