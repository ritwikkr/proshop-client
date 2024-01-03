import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";

import Wrapper from "../wrapper/ReviewsWrapper";
import Ratings from "./Ratings";
// import Loading from "../components/Loading";
import RatingsAndReviewsForm from "./RatingsAndReviewsForm";
import { deleteProductReview } from "../store/slices/singleProductSlice";

function Reviews({ reviews }) {
  // Component State
  const [showRatingForm, setShowRatingForm] = useState(false);

  // Redux
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  const { data: productData } = useSelector((state) => state.product);

  const handleRateProduct = () => {
    setShowRatingForm(true); // Show the rating form/modal upon clicking "Rate Product"
  };

  function deleteReviewHandler() {
    dispatch(
      deleteProductReview({ productID: productData._id, userID: data.user._id })
    );
  }

  return (
    <Wrapper>
      <div className="title">
        <h2>reviews</h2>
      </div>
      <div className="body">
        {reviews.map((review, index) => (
          <div key={index} className="reviews">
            <div className="review">
              <p className="author">{review?.userId?.name}</p>
              <Ratings stars={review?.ratings} />
              <p className="content">{review.review}</p>
            </div>
            {data && data.user._id === review.userId._id && (
              <div className="delete-btn" onClick={deleteReviewHandler}>
                <FaTrash />
              </div>
            )}
            <hr />
          </div>
        ))}
        {data &&
          !productData.ratingsAndReviews.ratingAndReview.some(
            (rating) => rating.userId._id === data?.user?._id
          ) &&
          data?.user && (
            <div className="give-review">
              <button onClick={handleRateProduct}>Rate Product</button>
            </div>
          )}
        {showRatingForm && (
          <RatingsAndReviewsForm onClose={() => setShowRatingForm(false)} />
        )}
      </div>
    </Wrapper>
  );
}

export default Reviews;
