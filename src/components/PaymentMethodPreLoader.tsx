import React from "react";
import styled from "styled-components";

function PaymentMethodPreLoader() {
  return (
    <Wrapper>
      <div className="page-container">
        <div className="box-container">
          <div className="box skeleton"></div>
          <div className="box-with-button skeleton">
            <button className="button"></button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default PaymentMethodPreLoader;

const Wrapper = styled.div`
  .page-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    height: 81.5vh;
  }

  .box-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .box,
  .box-with-button {
    height: 100px;
    background-color: lightgray;
    border-radius: 8px;
    padding: 20px;
    animation: skeleton-loading 1s infinite alternate;
  }

  .box-with-button {
    height: 200px;
    position: relative;
    padding-bottom: 40px; /* Add space for the button */
  }

  .button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 40px;
    background-color: gray;
    border-radius: 4px;
    border: transparent;
  }

  @keyframes skeleton-loading {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
