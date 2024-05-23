import styled from "styled-components";

const Wrapper = styled.div`
  > .wishlist {
    cursor: pointer;
    z-index: 1;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    position: absolute;
    right: 10%;
    top: 5%;
    .heart-icon {
      position: relative;
      width: 20px;
      height: 20px;
    }

    .heart-icon .clicked {
      display: none;
    }

    .loading-circle {
      position: absolute;
      border: 2px solid transparent;
      width: 20px;
      height: 20px;
      border-top-color: #333;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default Wrapper;
