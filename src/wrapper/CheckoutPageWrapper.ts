import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 130px);
  width: 100%;
  padding: 20px;
  > .body {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    > .left {
      margin-right: 40px;
      flex: 1;
      > .shipping,
      > .payment {
        margin-bottom: 30px;
      }
    }
    > .right {
      border: 1px solid gray;
      width: 350px;
      > .order-summary {
        > h2 {
          padding: 20px;
        }
        .items,
        .shipping,
        .tax,
        .total {
          padding: 0 100px 0 20px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
  @media only screen and (max-width: 650px) {
    > .body {
      > .right {
        width: 100%;
      }
    }
  }
`;

export default Wrapper;
