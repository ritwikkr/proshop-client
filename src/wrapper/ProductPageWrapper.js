import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  width: 80%;
  margin: auto;
  .back-btn {
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
    justify-content: space-between;
    .image {
      width: 600px;
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
      width: 300px;
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
        /* select {
          border: none;
          width: 70px;
          height: 30px;
          background-color: rgb(239, 239, 239);
          padding: 5px;
          outline: none;
        } */
      }
      .btn {
        padding-right: 10px;
        border-bottom: none;
        height: 70px;
        button {
          border: 2px solid red;
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
    /* border: 2px solid red; */
    margin: 40px 0;
    width: 800px;
  }
`;

export default Wrapper;
