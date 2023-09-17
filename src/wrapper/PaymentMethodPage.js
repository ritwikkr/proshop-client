import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 130px);
  padding: 20px;
  .main {
    max-width: 600px;
    margin: auto;
    .body {
      margin-top: 30px;
      h1 {
        text-transform: uppercase;
        font-weight: lighter;
        margin-bottom: 30px;
      }
      .select-method {
        margin-bottom: 20px;
        .title {
          font-size: 28px;
          text-transform: capitalize;
          margin-bottom: 10px;
        }
        > ul {
          > li {
            margin-bottom: 10px;
            list-style: none;
            input {
              border: 2px solid red;
              margin-right: 5px;
            }
          }
        }
      }
      .btn {
        button {
          height: 40px;
          width: 150px;
          background-color: black;
          color: white;
          border: none;
          text-transform: uppercase;
          cursor: pointer;
          outline: none;
        }
      }
    }
  }
`;

export default Wrapper;
