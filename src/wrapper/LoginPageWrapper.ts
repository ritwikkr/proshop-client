import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid transparent;
  .session-form {
    max-width: 400px;
    margin: 40px auto 0;
    .head {
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .body {
      form {
        .form-content {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
          label {
            text-transform: capitalize;
            margin-bottom: 5px;
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
              opacity: 0.5;
              cursor: not-allowed;
            }
          }
          > p {
            text-transform: capitalize;
            span {
              font-weight: bold;
              cursor: pointer;
              margin-left: 5px;
            }
          }
          a {
            width: fit-content;
            margin-bottom: 10px;
            .forgot-password {
              font-weight: bold;
            }
          }
        }
      }
      > .partition {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        > p {
          margin: 0 10px;
        }
        > hr {
          height: 1px;
          flex: 1;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 20px;
    .session-form {
    }
  }
`;

export default Wrapper;
