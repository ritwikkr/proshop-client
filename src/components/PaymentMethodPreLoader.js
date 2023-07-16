import React from "react";
import styled from "styled-components";

function PaymentMethodPreLoader() {
  return (
    <Wrapper>
      <div class="page-container">
        <nav class="navigation-bar skeleton"></nav>
        <div class="content-box skeleton">
          <button class="content-button"></button>
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
  }

  .skeleton {
    background-color: #f1f1f1;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .navigation-bar {
    height: 60px;
  }

  .content-box {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 20px;
  }

  .content-button {
    width: 120px;
    height: 40px;
    background-color: #e0e0e0;
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
