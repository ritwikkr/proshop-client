import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 130px);
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
        }
      }
    }
  }
  > .link-expired {
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > p {
      padding: 20px;
      border-radius: 10px;
      width: fit-content;
      margin: 20px 0;
      background-color: red;
    }
    > .home {
      display: flex;
      width: 50px;
      justify-content: space-between;
      background-color: transparent;
      padding: 0;
      > .icon {
        cursor: pointer;
      }
    }
  }
`;

export default Wrapper;
