import styled from "styled-components";

const Wrapper = styled.div`
  .title {
    text-transform: uppercase;
    margin-bottom: 20px;
    h2 {
      font-weight: lighter;
    }
  }
  .body {
    .reviews {
      position: relative;
      .review {
        padding: 10px;
        > .author {
          margin-bottom: 10px;
        }
        > p.content {
          color: gray;
          font-size: 15px;
        }
      }
      .delete-btn {
        width: 50px;
        height: 50px;
        background-color: lightgray;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: absolute;
        right: 2%;
        top: 5%;
        &:hover {
          color: white;
          background-color: black;
        }
      }

      hr {
        margin: 20px 0 10px 0;
        border: 1px solid lightgray;
      }
    }

    > .give-review {
      > button {
        background-color: black;
        color: white;
        text-transform: uppercase;
        cursor: pointer;
        font-weight: bold;
        width: 120px;
        height: 40px;
        border: none;
      }
    }
  }
`;

export default Wrapper;
