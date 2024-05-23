import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  padding: 10px;
  width: 100%;
  background-color: rgb(46, 50, 56);
  color: rgb(220, 224, 231);
  > .body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    flex-wrap: wrap;
    margin: auto;
    display: flex;
    > .logo {
      order: 1;
      h2 {
        height: 100%;
        text-transform: uppercase;
      }
    }
    > .search-bar {
      height: 40px;
      width: 300px;
      order: 2;
      > form {
        height: 100%;
        display: flex;
        justify-content: space-between;
        > input {
          height: 100%;
          border: none;
          width: 70%;
          padding-left: 20px;
          outline: none;
        }
        button {
          height: 100%;
          width: 25%;
          background-color: transparent;
          color: rgb(59, 117, 88);
          border: 2px solid rgb(59, 117, 88);
          text-transform: uppercase;
          cursor: pointer;
        }
      }
    }
    > .navigation {
      order: 3;
      display: flex;
      align-items: center;
      .cart,
      .profile,
      .wishlist {
        display: flex;
        align-items: center;
        margin: 0 15px;
        cursor: pointer;
        a,
        p {
          display: flex;
          text-transform: uppercase;
          font-size: 15px;
          color: rgb(146, 150, 159);
          .icon {
            margin-right: 5px;
          }
        }
        .user {
          position: relative;
          .caret {
            margin-left: -1px;
            background-color: rgb(46, 50, 56);
            color: white;
          }
          ul {
            position: absolute;
            z-index: 10;
            top: 200%;
            right: 50%;
            transform: translateX(50%);
            width: 200px;
            background-color: white;
            display: none;
            li {
              color: gray;
              width: 100%;
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
          width: 15px;
          height: 15px;
          background-color: white;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-left: 2px;
        }
      }
      > .wishlist {
        > .icon {
          margin-right: 5px;
          color: rgb(146, 150, 159);
        }
      }
    }
    .options {
      display: none;
    }
  }
  @media only screen and (max-width: 970px) {
    width: 100%;
    > .body {
      display: flex;
      align-items: flex-start;
      > .logo {
        order: 1;
      }
      > .search-bar {
        order: 3;
        width: 100%;
        margin: 10px auto 0;
        display: flex;
        > form {
          flex: 1;
          > input {
            flex: 1;
          }
          > button {
          }
        }
      }
      > .navigation {
        order: 2;
        margin-top: 5px;
      }
    }
  }

  @media only screen and (max-width: 550px) {
    .body {
      .logo {
        margin-right: 0;
      }
      > .navigation {
        > .cart {
          position: relative;
          .text {
            display: none;
          }
          .length {
            position: absolute;
            left: 40%;
            top: -30%;
          }
        }
        > .wishlist {
          p {
            display: none;
          }
        }
      }
    }
  }
`;

export default Wrapper;
