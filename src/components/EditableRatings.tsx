import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

interface EditableRatings {
  stars: number;
  onChange: (selectedStars: number) => void;
}

function EditableRatings({ stars: initialStars, onChange }: EditableRatings) {
  const [hoverStars, setHoverStars] = useState(0); // State to track hovered stars
  const [selectedStars, setSelectedStars] = useState(initialStars); // State to track selected stars

  const handleStarClick = (selectedStars: number) => {
    setSelectedStars(selectedStars);
    onChange(selectedStars); // Call the onChange prop to pass the selected stars to the parent component
  };

  return (
    <Wrapper>
      {[1, 2, 3, 4, 5].map((index) => (
        <StarIcon
          key={index}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => setHoverStars(index)}
          onMouseLeave={() => setHoverStars(0)} // Reset hover stars on mouse leave
        >
          {index <= (hoverStars || selectedStars) ? (
            <FaStar />
          ) : (
            <FaStar style={{ opacity: "0.3" }} />
          )}
        </StarIcon>
      ))}
    </Wrapper>
  );
}

export default EditableRatings;

const Wrapper = styled.div`
  color: rgb(250, 218, 56);
`;

const StarIcon = styled.span<
  { children: React.ReactNode } & React.HTMLAttributes<HTMLSpanElement>
>`
  cursor: pointer;
`;
