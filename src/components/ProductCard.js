import React from "react";
import Wrapper from "../wrapper/ProductCardWrapper";

function ProductCard({ item }) {
  return (
    <Wrapper>
      <li>
        <div className="product-image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="product-title">
          <p>{item.name}</p>
        </div>
        <div className="product-qty">
          {item.qty} x $ {item.price} = $ {item.qty * item.price}
        </div>
      </li>
      <hr />
    </Wrapper>
  );
}

export default ProductCard;
