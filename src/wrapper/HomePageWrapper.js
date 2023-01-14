import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 150px);
  > .body {
    > .featured {
      /* background-color: linen; */
      margin: 20px auto;
      width: 90%;
      h2 {
        text-transform: uppercase;
        font-weight: lighter;
        margin-bottom: 30px;
      }
      > .products {
        /* border: 5px solid red; */
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    }
  }
`;

export default Wrapper;
