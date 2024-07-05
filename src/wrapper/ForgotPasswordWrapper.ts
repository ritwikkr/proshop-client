import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid transparent;
  > .body {
    width: 400px;
    margin: 50px auto;
    > form {
      margin-top: 30px;
      .form-content {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        label {
          text-transform: capitalize;
          margin-bottom: 5px;
          margin-bottom: 10px;
        }
        input {
          height: 40px;
          padding-left: 10px;
          outline: none;
          border: none;
          background-color: rgb(248, 247, 251);
          border-radius: 5px;
          &::placeholder {
            text-transform: capitalize;
          }
        }
        button {
          border: none;
          height: 40px;
          font-weight: bold;
          text-transform: uppercase;
          background-color: black;
          color: white;
          cursor: pointer;
          width: 100%;
          margin: 20px 0;
          &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
          }
        }
      }
    }
  }
`;

export default Wrapper;
