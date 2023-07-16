import React from "react";
import styled from "styled-components";

function ProductPagePreLoader() {
  return (
    <Wrapper>
      <div class="page-container">
        <div class="product-details skeleton">
          <div class="product-image"></div>
          <div class="product-info">
            <div class="product-title"></div>
            <div class="product-rating"></div>
            <div class="product-description"></div>
          </div>
          <div class="product-price-add-to-cart"></div>
          <div class="product-reviews"></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProductPagePreLoader;

const Wrapper = styled.div`
  .page-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .header {
    height: 60px;
    background-color: #f1f1f1;
    margin-bottom: 20px;
  }

  .skeleton {
    background-color: lightgray;
    border-radius: 8px;
    margin-bottom: 20px;
    animation: skeleton-loading 1s infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  .product-details {
    position: relative;
    padding: 20px;
    overflow: hidden; /* Add this line to hide the overflow */
  }

  .product-image {
    width: 100%;
    height: 300px;
  }

  .product-info {
    margin-bottom: 20px;
  }

  .product-title {
    width: 80%;
    height: 20px;
  }

  .product-rating {
    width: 40%;
    height: 20px;
  }

  .product-description {
    width: 100%;
    height: 80px;
  }

  .product-price-add-to-cart {
    width: 100%;
    height: 40px;
  }

  .product-reviews {
    width: 100%;
    height: 200px;
  }

  .product-details::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%; /* Modify this value to control the starting position */
    width: 200%; /* Modify this value to control the width of the shining effect */
    height: 100%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.9),
      transparent
    );
    animation: product-details-shining 2s linear infinite;
  }

  @keyframes product-details-shining {
    0% {
      left: -100%;
    }
    100% {
      left: 100%; /* Modify this value to control the ending position */
    }
  }
`;
