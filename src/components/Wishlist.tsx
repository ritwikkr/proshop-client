import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../interface/store/storeTypes";
import { toggleWishlist } from "../store/slices/userSlice";
import { fetchWishlistedProducts } from "../store/slices/productsSlice";
import { AppDispatch } from "../store/store";
import { FaHeart } from "react-icons/fa";
import Wrapper from "../wrapper/Wishlist";

interface WishlistPropType {
  productId: string;
}

function Wishlist({ productId }: WishlistPropType) {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.user);

  const isWishlisted = data?.user.wishlist.find((item) => item === productId);

  // Toggle Handler
  async function toggleWishlistHandler(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.preventDefault();
    if (data) {
      await dispatch(toggleWishlist({ userId: data?.user._id, productId }));
      dispatch(fetchWishlistedProducts());
    }
  }

  return (
    <Wrapper>
      {data && (
        <div className="wishlist" onClick={toggleWishlistHandler}>
          {!isWishlisted ? <FaHeart /> : <FaHeart style={{ color: "red" }} />}
        </div>
      )}
    </Wrapper>
  );
}

export default Wishlist;
