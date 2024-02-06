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
      > .pagination {
        > .page-number-list {
          display: flex;
          justify-content: center;
          margin-top: 10px;
          .page-number {
            border: 1px solid #ccc;
            background-color: white;
            color: #333;
            padding: 5px 10px;
            margin: 0 3px;
            cursor: pointer;
            transition: background-color 0.3s;
            &:hover {
              background-color: #f0f0f0;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
