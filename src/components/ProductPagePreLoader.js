import React from "react";
import styled from "styled-components";

function ProductPagePreLoader() {
  return (
    <Wrapper>
      <div class="product-details">
        <div class="product-image skeleton"></div>
        <div class="product-info skeleton">
          <div class="product-title"></div>
          <div class="product-rating"></div>
          <div class="product-description"></div>
        </div>
        <div class="product-price-add-to-cart skeleton"></div>
        <div class="product-reviews skeleton"></div>
      </div>
    </Wrapper>
  );
}

export default ProductPagePreLoader;

const Wrapper = styled.div`
  .product-details {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .skeleton {
    background-color: #f1f1f1;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .product-image {
    width: 200px;
    height: 200px;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .product-title {
    width: 60%;
    height: 20px;
  }

  .product-rating {
    width: 40%;
    height: 20px;
  }

  .product-description {
    width: 80%;
    height: 100px;
  }

  .product-price-add-to-cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-price-add-to-cart .price {
    width: 40%;
    height: 20px;
  }

  .product-price-add-to-cart .add-to-cart {
    width: 120px;
    height: 40px;
  }

  .product-reviews {
    width: 100%;
    height: 200px;
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
