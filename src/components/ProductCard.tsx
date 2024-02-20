import React from "react";
import Wrapper from "../wrapper/ProductCardWrapper";
import { CartItem } from "../interface/store/slice/cartTypes";

interface ProductCardProps {
  item: CartItem;
}

function ProductCard({ item }: ProductCardProps) {
  // Round the item price to two decimal places
  const roundedPrice = item.price.toFixed(2);

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
          {item.qty} x $ {roundedPrice} = $ {(item.qty * item.price).toFixed(2)}
        </div>
      </li>
      <hr />
    </Wrapper>
  );
}

export default ProductCard;
