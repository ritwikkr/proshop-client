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
    hr {
      margin: 20px 0 10px 0;
      border: 1px solid lightgray;
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
