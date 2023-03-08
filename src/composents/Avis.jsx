import styled from "styled-components";
import colors from "../utils/colors";
import starGrey from "../assets/star-grey.png";
import starPrimary from "../assets/star-primary.png";
import responsiveStarPrimary from "../assets/Responsive/star-primary.png";
import responsiveStarGrey from "../assets/Responsive/star-grey.png";
import { useState } from "react";

const StyledRating = styled.div`
  display: flex;
  justify-content: end;
`;

const RatingStar = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${(props) => (props.active ? starPrimary : starGrey)});
  @media (max-width: 600px) {
    width: 15px;
    height: 15px;
    background-image: url(${(props) =>
      props.active ? responsiveStarPrimary : responsiveStarGrey});
  }
`;

function Rating({ rating }) {
  const allStar = [];
  // créer 5 étoiles et vérifie la note passer en paramettre pour activer ou non les étoiles.
  for (let index = 0; index < 5; index++) {
    console.log(rating + " index " + index);
    console.log(rating - 1 > index);
    allStar.push(<RatingStar key={index} active={rating > index}></RatingStar>);
  }

  return <StyledRating>{allStar}</StyledRating>;
}

export default Rating;
