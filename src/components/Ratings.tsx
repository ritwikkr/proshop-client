import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import styled from "styled-components";

function Ratings({ stars }: { stars: number }) {
  return (
    <Wrapper>
      {stars >= 1 ? <FaStar /> : stars >= 0.5 ? <FaStarHalfAlt /> : null}
      {stars >= 2 ? <FaStar /> : stars >= 1.5 ? <FaStarHalfAlt /> : null}
      {stars >= 3 ? <FaStar /> : stars >= 2.5 ? <FaStarHalfAlt /> : null}
      {stars >= 4 ? <FaStar /> : stars >= 3.5 ? <FaStarHalfAlt /> : null}
      {stars >= 5 ? <FaStar /> : stars >= 4.5 ? <FaStarHalfAlt /> : null}
    </Wrapper>
  );
}

export default Ratings;

const Wrapper = styled.div`
  color: rgb(250, 218, 56);
`;
