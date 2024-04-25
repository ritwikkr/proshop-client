import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  width: 85%;
  margin: auto;
  .back-btn {
    position: relative;
    margin: 20px 0;
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
  .dashboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .image {
      position: relative;
      width: 500px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .prod-details {
      margin: 0 40px;
      width: 400px;
      letter-spacing: 1.1px;
      .title {
        font-size: 22px;
        text-transform: uppercase;
      }
      hr {
        margin: 10px 0;
        border: 1px solid lightgray;
      }
      .rating {
        display: flex;
        span {
          margin-left: 10px;
        }
      }
    }
    .price-box {
      width: 400px;
      border: 1px solid lightgray;
      height: fit-content;
      .price,
      .status,
      .qty,
      .btn {
        padding: 10px 30px 10px 10px;
        display: flex;
        height: 60px;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
        .instock {
          color: green;
        }
        .outofstock {
          color: red;
        }
      }
      .qty {
        .change-qty {
          display: flex;
          button {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            background-color: black;
            color: white;
            font-weight: bolder;
          }
          input {
            width: 35px;
            margin: 0 5px;
            text-align: center;
          }
        }
      }
      .btn {
        padding-right: 10px;
        border-bottom: none;
        height: 70px;
        button {
          width: 95%;
          height: 50px;
          background-color: black;
          color: white;
          margin: auto;
          cursor: pointer;
          text-transform: uppercase;
          font-weight: 600;
          border: none;
          font-size: 16px;
          &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
          }
        }
      }
    }
  }
  .reviews {
    margin: 40px 0;
    width: 800px;
  }

  @media only screen and (max-width: 1595px) {
    .dashboard {
      justify-content: center;
      .prod-details {
        width: 25%;
      }
      .price-box {
        width: 20%;
      }
    }
  }

  @media only screen and (max-width: 1350px) {
    .dashboard {
      .image {
        width: 400px;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 1100px) {
    .dashboard {
      > .price-box {
        width: 80%;
        margin-top: 20px;
      }
    }
  }

  @media only screen and (max-width: 910px) {
    .dashboard {
      .image {
        width: 300px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .reviews {
      width: 100%;
    }
  }

  @media only screen and (max-width: 785px) {
    .dashboard {
      display: block;
      .prod-details {
        margin: 20px 0 0 0;
        width: 100%;
      }
      .price-box {
        width: 100%;
      }
    }
  }
`;

export default Wrapper;
