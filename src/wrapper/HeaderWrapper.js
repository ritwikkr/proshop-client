import styled from "styled-components";

const Wrapper = styled.div`
  height: 80px;
  position: relative;
  padding: 10px;
  background-color: rgb(46, 50, 56);
  color: rgb(220, 224, 231);
  > .body {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    .left {
      display: flex;
      .logo {
        margin-right: 150px;
        h2 {
          height: 100%;
          text-transform: uppercase;
        }
      }
    }
    .search-bar {
      height: 40px;
      input {
        height: 100%;
        margin-right: 10px;
        border: none;
        padding-left: 20px;
        outline: none;
      }
      button {
        height: 100%;
        width: 70px;
        background-color: transparent;
        color: rgb(59, 117, 88);
        border: 2px solid rgb(59, 117, 88);
        text-transform: uppercase;
      }
    }
    > .navigation {
      display: flex;
      align-items: center;
      .cart,
      .profile {
        display: flex;
        align-items: center;
        margin: 0 15px;
        a,
        p {
          display: flex;
          cursor: pointer;
          text-transform: uppercase;
          font-size: 15px;
          color: rgb(146, 150, 159);
          .icon {
            margin-right: 5px;
          }
        }
        .user {
          position: relative;
          ul {
            position: absolute;
            z-index: 10;
            top: 200%;
            right: 50%;
            transform: translateX(50%);
            width: 200px;
            background-color: white;
            color: black;
            display: none;
            li {
              list-style: none;
              font-size: 15px;
              cursor: pointer;
              margin: 10px 0;
              padding: 10px;
              text-transform: uppercase;
            }
          }
          ul.showAccount {
            display: block;
          }
          > p {
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
        span {
          width: 20px;
          height: 20px;
          background-color: white;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-left: 10px;
        }
      }
    }
    .options {
      display: none;
    }
  }
  @media only screen and (max-width: 900px) {
    height: 100px;
    width: 100%;
    /* padding: 0; */
    .body {
      /* border: 2px solid blue; */
      display: flex;
      align-items: flex-start;
      .left {
        .search-bar {
          width: 80%;
          /* border: 2px solid blue; */
          position: absolute;
          left: 50%;
          display: flex;
          top: 50%;
          transform: translateX(-50%);
          input {
            flex: 1;
          }
        }
      }
      .navigation {
        /* border: 2px solid red; */
        margin-top: 5px;
      }
    }
  }

  @media only screen and (max-width: 550px) {
    .body {
      .left {
        .logo {
          margin-right: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .body {
      .navigation {
        .profile {
          .user {
            ul {
              width: 100px;
              border: 2px solid yellow;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
