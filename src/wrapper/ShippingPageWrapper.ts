import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 130px);
  padding: 20px;
  .main {
    max-width: 600px;
    margin: 20px auto 0;
    .content {
      margin-top: 50px;
      .title {
        margin-bottom: 20px;
        text-transform: uppercase;
      }
      .body {
        form {
          .form-content {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            label {
              margin-bottom: 10px;
            }
            input {
              height: 40px;
              padding-left: 10px;
              background-color: rgb(248, 246, 250);
              border: none;
              outline: none;
              font-size: 18px;
            }
            > button {
              height: 40px;
              width: 100px;
              border: none;
              background-color: black;
              color: white;
              cursor: pointer;
              text-transform: uppercase;
              &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
              }
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
