import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 170px);
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
          }
          > p {
            text-transform: capitalize;
            span {
              font-weight: bold;
              cursor: pointer;
              margin-left: 5px;
            }
          }
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
