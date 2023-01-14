import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 130px);
  .main {
    width: 1200px;
    margin: auto;
    .progress-bar {
      width: 600px;
      margin: 20px auto;
    }
    > .body {
      margin-top: 50px;
      display: flex;
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
          ul {
            li {
              display: flex;
              align-items: center;
              justify-content: space-between;
              list-style: none;
              .product-image {
                width: 80px;
                img {
                  border-radius: 10px;
                  width: 100%;
                  height: 100%;
                }
              }
            }
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
`;

export default Wrapper;
