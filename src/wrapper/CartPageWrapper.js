import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 130px);
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  .cart {
    .back-btn {
      button {
        text-transform: uppercase;
        height: 40px;
        width: 100px;
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
    .title {
      margin: 20px 0;
      p {
        text-transform: uppercase;
        font-size: 30px;
      }
    }
    .body {
      > h1 {
        a {
          text-decoration: underline;
          color: blue;
        }
      }
      .item {
        display: flex;
        align-items: flex-start;
        padding: 10px;
        .prod-view {
          display: flex;
          .image {
            width: 120px;
            margin-right: 20px;
            img {
              border-radius: 5px;
              width: 100%;
              height: 100%;
            }
          }
          .product-title {
            text-transform: capitalize;
            letter-spacing: 1.1px;
            width: 250px;
            margin-right: 20px;
          }
        }
        .price {
          margin-right: 30px;
          font-weight: bold;
        }
        .product-qty {
          display: flex;
          margin-right: 50px;
          font-size: 15px;
          font-weight: 600;
        }
        .remove {
          cursor: pointer;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgb(240, 240, 240);
        }
      }
    }
  }
  .subtotal {
    border: 1px solid lightgray;
    width: 400px;
    height: fit-content;
    margin-top: 20px;
    .title {
      padding: 10px;
      p {
        font-size: 22px;
        text-transform: uppercase;
      }
    }
    .amt {
      padding: 10px;
      border-bottom: 1px solid lightgray;
      font-weight: bold;
    }
    .btn {
      padding: 10px;
      button {
        cursor: pointer;
        width: 100%;
        border: none;
        outline: none;
        height: 40px;
        text-transform: uppercase;
        background-color: black;
        color: white;
        font-size: 16px;
        &:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      }
    }
  }

  @media only screen and (max-width: 950px) {
    display: block;
    .subtotal {
      width: 100%;
      text-align: center;
    }
  }

  @media only screen and (max-width: 690px) {
    .cart {
      > .body {
        .item {
          position: relative;
          .prod-view {
            width: fit-content;
            display: block;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 560px) {
    .cart {
      .body {
        .item {
          .prod-view {
            width: 200px;
            .product-title {
              width: 100%;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 390px) {
    .cart {
      .body {
        .item {
          position: relative;
          .remove {
            position: absolute;
            left: 60%;
            top: 30%;
          }
        }
      }
    }
  }
`;

export default Wrapper;
