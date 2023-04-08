import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 150px);
  > .body {
    > .featured {
      margin: 20px auto;
      width: 90%;
      h2 {
        text-transform: uppercase;
        font-weight: lighter;
        margin-bottom: 30px;
      }
      > .products {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    }
  }
`;

export default Wrapper;
