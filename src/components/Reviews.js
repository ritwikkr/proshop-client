import React from "react";
import Wrapper from "../wrapper/ReviewsWrapper";
import Ratings from "./Ratings";

function Reviews() {
  return (
    <Wrapper>
      <div className="title">
        <h2>reviews</h2>
      </div>
      <div className="body">
        <div className="review">
          <p className="author">Jane Doe</p>
          <Ratings stars={5} />
          <p className="date">2020-09-27</p>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            reiciendis.
          </p>
        </div>
        <hr />
        <div className="review">
          <p className="author">John Doe</p>
          <Ratings stars={2} />
          <p className="date">2020-09-27</p>
          <p className="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            delectus dicta maxime aliquam officiis architecto.
          </p>
        </div>
        <hr />
        <div className="give-review">
          <p className="title">write a customer review</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Reviews;
