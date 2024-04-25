import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 130px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  .back-btn {
    position: relative;
    display: flex;
    justify-content: space-between;
    button {
      width: 100px;
      height: 40px;
      text-transform: uppercase;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
  > .header {
    padding-left: 15px;
    text-transform: uppercase;
    > h2 {
      font-weight: lighter;
    }
  }
  > .products {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    > .no-items {
      text-align: center;
      width: 50%;
      > h2 {
        text-transform: uppercase;
        font-weight: lighter;
        margin-bottom: 20px;
      }
      > p {
        color: gray;
      }
      > .icon {
        font-size: 80px;
      }
      > button {
        border: 2px solid gray;
        border-radius: 5px;
        width: 200px;
        height: 50px;
        cursor: pointer;
        background-color: transparent;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`;

export default Wrapper;
