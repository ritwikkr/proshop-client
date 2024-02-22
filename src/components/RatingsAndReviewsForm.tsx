import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { giveProductReview } from "../store/slices/singleProductSlice";
import EditableRatings from "./EditableRatings";
import Wrapper from "../wrapper/RatingsAndReviewsFormWrapper";
import Alert from "./Alert";
import { AppDispatch } from "../store/store";

interface RatingsAndReviewsFormProps {
  onClose: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function RatingsAndReviewsForm({ onClose }: RatingsAndReviewsFormProps) {
  // Component State
  const [review, setReview] = useState("");
  const [selectedStars, setSelectedStars] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  // Redux
  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();

  function submitReviews() {
    if (selectedStars === 0) {
      return setShowAlert(true);
    }
    if (id)
      dispatch(
        giveProductReview({
          productId: id,
          review,
          rating: selectedStars,
        })
      );
  }

  const handleRatingChange = (stars: number) => {
    setSelectedStars(stars); // Update the selected stars
  };
  return (
    <Wrapper>
      {showAlert && <Alert message={`Please select stars`} type="error" />}
      <EditableRatings stars={selectedStars} onChange={handleRatingChange} />
      <textarea
        name="review"
        id="review"
        cols={30}
        rows={10}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <button onClick={submitReviews}>POST</button>
    </Wrapper>
  );
}

export default RatingsAndReviewsForm;