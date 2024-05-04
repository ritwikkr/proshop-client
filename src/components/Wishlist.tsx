import React from "react";
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
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.user);
  const { items } = useSelector((state: RootState) => state.wishlist);
  const isWishlisted = items.find((item) => {
    return item._id === productId;
  });

  function toggleWishlistHandler(e: React.MouseEvent) {
    e.preventDefault();
    dispatch(toggleWishlist({ itemId: productId }));
  }

  return (
    <Wrapper>
      {data && (
        <div className="wishlist">
          <FaHeart
            onClick={toggleWishlistHandler}
            style={isWishlisted ? { color: "red" } : {}}
          />
        </div>
      )}
    </Wrapper>
  );
}

export default Wishlist;
