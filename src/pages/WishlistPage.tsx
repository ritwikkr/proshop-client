import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import Wrapper from "../wrapper/WishlistPage";
import { AppDispatch } from "../store/store";
import { RootState } from "../interface/store/storeTypes";
import Loading from "../components/Loading";
import Product from "../components/Product";
import { fetchWishlist } from "../store/slices/wishlistSlice";
import { toast } from "react-toastify";
import GoBackButton from "../utilities/GoBackButton";

function WishlistPage() {
  // Redux
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.user);
  const { items, status, error } = useSelector(
    (state: RootState) => state.wishlist
  );

  // Navigation
  const navigate = useNavigate();

  // Side Effect => Fetch all wishlisted product
  useEffect(() => {
    if (data) dispatch(fetchWishlist());
  }, []);

  if (status === "loading") return <Loading />;
  if (status === "failed") toast.error(error);

  return (
    <Wrapper>
      {items.length > 0 && (
        <div className="header">
          <div className="back-btn">
            <GoBackButton />
          </div>
          <div className="header">
            <h2>wishlisted products</h2>
          </div>
        </div>
      )}
      <div className="products">
        {items.length === 0 ? (
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
          items.map((item) => (
            <div className="product" key={item._id}>
              <Product item={item} />
            </div>
          ))
        )}
      </div>
    </Wrapper>
  );
}

export default WishlistPage;
