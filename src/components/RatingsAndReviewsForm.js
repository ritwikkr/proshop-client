import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Ratings from "./Ratings";
import { giveProductReview } from "../store/slices/singleProductSlice";
import EditableRatings from "./EditableRatings";
import Wrapper from "../wrapper/RatingsAndReviewsFormWrapper";

function RatingsAndReviewsForm() {
  // Component State
  const [review, setReview] = useState("");
  const [selectedStars, setSelectedStars] = useState(0);

  // Redux
  const dispatch = useDispatch();

  const { id } = useParams();

  function submitReviews() {
    dispatch(
      giveProductReview({
        productId: id,
        review,
        rating: selectedStars,
      })
    );
  }

  const handleRatingChange = (stars) => {
    setSelectedStars(stars); // Update the selected stars
  };
  return (
    <Wrapper>
      <EditableRatings stars={selectedStars} onChange={handleRatingChange} />
      <textarea
        name="review"
        id="review"
        cols="30"
        rows="10"
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <button onClick={submitReviews} disabled={review.length === 0}>
        POST
      </button>
    </Wrapper>
  );
}

export default RatingsAndReviewsForm;
