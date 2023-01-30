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
      p.content {
        margin-top: 10px;
      }
    }
    hr {
      margin: 20px 0 10px 0;
      border: 1px solid lightgray;
    }
  }
`;

export default Wrapper;
