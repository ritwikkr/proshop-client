import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 0;
  > li {
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
`;

export default Wrapper;
