import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  > .header {
    width: 85%;
    margin: auto;
    .back-btn {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
    }
    > .header {
      text-transform: uppercase;
      > h2 {
        font-weight: lighter;
      }
    }
  }

  > .products {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 85%;
    margin: auto;
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
