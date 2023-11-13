import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 120px);
  > .delivery-address {
    width: 90%;
    margin: 30px auto 0;
    background-color: white;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    > .left {
      max-width: 40%;
      > .body {
        margin: 10px 0;
        > .user-name {
          font-weight: 600;
        }
        > .user-address {
          display: flex;
          flex-wrap: wrap;
        }
      }
    }
    > .middle {
      > h3 {
        margin-bottom: 20px;
      }
      > .saving {
        display: flex;
        > .icon {
          margin-right: 10px;
        }
      }
    }
    > .right {
      width: 30%;
      > .body {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        > p {
          display: flex;
        }
        > button {
          width: 100px;
          height: 30px;
          background-color: transparent;
          cursor: pointer;
          border: 2px solid rgb(193, 31, 37);
          border-radius: 3px;
        }
      }
    }
  }
  > .delivery-status {
    width: 90%;
    margin: 20px auto 0;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    > .product {
      padding: 20px;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      display: flex;
      min-width: 49%;
      margin: 0 10px 20px 0;
      > .product-image {
        margin-right: 10px;
        > img {
          width: 80px;
        }
      }
      > .product-details {
        > .product-title {
          margin-bottom: 5px;
        }
        > .product-brand {
          margin-bottom: 5px;
          color: gray;
          font-size: 14px;
        }
        > .product-price {
          font-weight: bold;
        }
      }
    }
  }
`;

export default Wrapper;
