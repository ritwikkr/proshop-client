import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 130px);
  padding: 20px;
  .main {
    max-width: 1200px;
    margin: auto;
    .progress-bar {
      width: 600px;
      margin: 20px auto;
    }
    > .body {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      .product-details {
        width: 60%;
        .shipping {
          .title {
            text-transform: uppercase;
            font-weight: lighter;
            margin-bottom: 10px;
          }
          p {
            letter-spacing: 1.1px;
          }
        }
        hr {
          margin: 10px 0;
        }
        .payment-method {
          .title {
            text-transform: uppercase;
            font-weight: lighter;
            margin-bottom: 10px;
          }
        }
        .order-items {
          .title {
            text-transform: uppercase;
            font-weight: lighter;
            margin-bottom: 10px;
          }
        }
      }
      .order-summary {
        border: 1px solid gray;
        height: fit-content;
        margin-left: 40px;
        width: 350px;
        .title {
          padding: 10px;
          text-transform: uppercase;
          h2 {
            font-weight: lighter;
          }
        }
        .body {
          .items,
          .shipping,
          .tax,
          .total {
            display: flex;
            justify-content: space-between;
            padding: 10px 100px 10px 10px;
          }
          .btn {
            padding: 10px;
            button {
              cursor: pointer;
              border: none;
              height: 40px;
              font-weight: 600;
              width: 100%;
              background-color: black;
              color: white;
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }
  .end {
    background-color: rgb(206, 245, 252);
    color: rgb(45, 94, 100);
    border: 2px dashed rgb(45, 94, 100);
    text-align: center;
    margin-top: 40px;
    padding: 20px;
  }

  @media only screen and (max-width: 980px) {
    .main {
      > .body {
        .product-details {
          .order-items {
            ul {
              li {
                display: block;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .main {
      > .body {
        flex-wrap: wrap;
        .product-details {
          width: 100%;
          .order-items {
            ul {
              li {
                display: flex;
              }
            }
          }
        }
        .order-summary {
          width: 100%;
          margin-top: 40px;
          margin-left: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 650px) {
    .main {
      .progress-bar {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .main {
      .body {
        .product-details {
          .order-items {
            ul {
              li {
                display: block;
              }
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
