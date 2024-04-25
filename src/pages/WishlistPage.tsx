import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import Wrapper from "../wrapper/WishlistPage";
import { fetchWishlistedProducts } from "../store/slices/productsSlice";
import { AppDispatch } from "../store/store";
import { RootState } from "../interface/store/storeTypes";
import Loading from "../components/Loading";
import Product from "../components/Product";

function WishlistPage() {
  // Redux
  const dispatch = useDispatch<AppDispatch>();
  const { wishlistedProducts, isLoading } = useSelector(
    (state: RootState) => state.products
  );

  // Navigation
  const navigate = useNavigate();

  // Side Effect => Fetch all wishlisted product
  useEffect(() => {
    dispatch(fetchWishlistedProducts());
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Wrapper>
      {wishlistedProducts.length > 0 && (
        <>
          <div className="back-btn">
            <button onClick={() => navigate("/")}>go back</button>
          </div>
          <div className="header">
            <h2>wishlisted products</h2>
          </div>
        </>
      )}
      <div className="products">
        {wishlistedProducts.length === 0 ? (
          <div className="no-items">
            <h2>your wishlist is empty</h2>
            <p>
              Add items that you like to your wishlist. <br />
              Review them anytime
            </p>
            <div className="icon">
              <FaHeartCirclePlus />
            </div>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
          </div>
        ) : (
          wishlistedProducts.map((item) => (
            <div className="product" key={item._id}>
              <Product
                _id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                ratingsAndReviews={item.ratingsAndReviews}
              />
            </div>
          ))
        )}
      </div>
    </Wrapper>
  );
}

export default WishlistPage;
