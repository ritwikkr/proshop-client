import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 170px);
  > .alert {
    width: 50%;
    margin: 40px auto;
    height: 100%;
  }
  form {
    margin: 30px auto;
    width: 30%;
    .heading {
      margin-bottom: 30px;
    }
    .form-content {
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      label {
        margin-bottom: 5px;
        font-size: 20px;
      }
      input {
        width: 100%;
        height: 40px;
        padding-left: 10px;
        border: none;
        outline: none;
        font-size: 18px;
        background-color: rgb(249, 247, 250);
      }
      button {
        height: 40px;
        background-color: black;
        color: white;
        border: none;
        outline: none;
        text-transform: uppercase;
        font-weight: bold;
        width: 100%;
        margin-top: 20px;
        cursor: pointer;
      }
    }
  }
`;

export default Wrapper;
