import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 10px;
  width: 350px;
  margin: 0 10px 10px 0;
  cursor: pointer;
  .body {
    position: relative;
    > .image {
      width: 90%;
      border-radius: 8px;
      margin: 10px auto;
      overflow: hidden;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .description {
      width: 80%;
      margin: 20px auto;
      .title {
        letter-spacing: 1.2px;
        line-height: 22px;
      }
      .rating {
        margin: 10px 0;
        display: flex;
        flex-wrap: wrap;
        span {
          color: black;
          margin-left: 10px;
          letter-spacing: 1.1px;
        }
      }
      .price {
        font-size: 28px;
        font-weight: 500;
        margin-bottom: 10px;
      }
    }
    > .add-to-cart {
      width: 95%;
      margin: auto;
    }
  }

  @media only screen and (max-width: 802px) {
    width: 48%;
  }

  @media only screen and (max-width: 560px) {
    width: 46%;
    .body {
      > .description {
        > .rating {
          > span {
            margin: 0;
          }
        }
        > .price {
          font-size: 22px;
        }
      }
    }
  }
`;

export default Wrapper;
