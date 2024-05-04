import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../interface/store/storeTypes";
import { AppDispatch } from "../store/store";
import { FaHeart } from "react-icons/fa";
import Wrapper from "../wrapper/Wishlist";
import { toggleWishlist } from "../store/slices/wishlistSlice";

interface WishlistPropType {
  productId: string;
}

function Wishlist({ productId }: WishlistPropType) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.user);
  const { items } = useSelector((state: RootState) => state.wishlist);
  const isWishlisted = items.find((item) => {
    return item._id === productId;
  });

  function toggleWishlistHandler(e: React.MouseEvent) {
    e.preventDefault();
    setLoading(true);
    dispatch(toggleWishlist({ itemId: productId })).then(() => {
      setLoading(false);
    });
  }

  return (
    <Wrapper>
      {data && (
        <div className="wishlist">
          <div className={`heart-icon ${loading ? "clicked" : ""}`}>
            {loading ? (
              <div className="loading-circle"></div>
            ) : (
              <FaHeart
                className="heart-icon"
                onClick={toggleWishlistHandler}
                style={isWishlisted ? { color: "red" } : {}}
              />
            )}
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default Wishlist;
