import React, { useState } from "react";
import { useSelector } from "react-redux";

import Wrapper from "../wrapper/ReviewsWrapper";
import Ratings from "./Ratings";
// import Loading from "../components/Loading";
import RatingsAndReviewsForm from "./RatingsAndReviewsForm";

function Reviews({ reviews }) {
  // Component State
  const [showRatingForm, setShowRatingForm] = useState(false);

  // Redux
  const { data } = useSelector((state) => state.user);
  const { data: productData } = useSelector((state) => state.product);

  const handleRateProduct = () => {
    setShowRatingForm(true); // Show the rating form/modal upon clicking "Rate Product"
  };

  return (
    <Wrapper>
      <div className="title">
        <h2>reviews</h2>
      </div>
      <div className="body">
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="review">
              <p className="author">{review?.userId?.name}</p>
              <Ratings stars={review?.ratings} />
              <p className="content">{review.review}</p>
            </div>
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
