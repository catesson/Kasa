import styled from "styled-components";
import colors from "../utils/colors";
import { useState } from "react";
import arrow from "../assets/carrousel-arrow.png";
import responsiveArrow from "../assets/Responsive/carrousel-arrow.png";
import PropTypes from 'prop-types'
 



const StyledCarousel = styled.div`
  display: flex;
  width: 100%;
  height: 415px;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  @media (max-width: 600px){
    border-radius:10px;
    height:255px;
  }
`;

const CarrouselImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const CarrouselOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: ${({overlay}) =>  overlay ? "flex" : "none"};
  justify-content: space-between;
  align-items: center;


`;
const CarrouselNext = styled.div`
  margin: 0 10px;
  height: 80px;
  width: 47px;
  background-image: url(${arrow});
  transform: rotate(180deg);
  @media (max-width: 600px){
    width:12px;
    height:20px;
    background-image: url(${responsiveArrow});
  }
`;
const CarrouselPrev = styled.div`
  margin: 0 10px;
  height: 80px;
  width: 47px;
  background-image: url(${arrow});
  @media (max-width: 600px){
    width:12px;
    height:20px;
    background-image: url(${responsiveArrow});
  }
`;

const CarrouselNbOfPicture = styled.p`
align-self:end;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
color:${colors.white};
@media (max-width: 600px){display:none;}`

function Carrousel({ Pictures }) {
  const [nbPicture, setNbPicture] = useState(0);
  
  const allCarrouselImg = Pictures.map((picture, index) => (
    <CarrouselImg
      key={`${picture}-${index + 1}`}
      src={picture}
      alt={"image " + index + " du logement "}
    ></CarrouselImg>
  ));
  //contient le nombre totale d'image dans le carrousel
  const nbImage = allCarrouselImg.length
  //est à true s'il y à plus d'une image. (permet d'afficher les flêches du carrousel)
  const overlay = ( nbImage > 1);

  // change d'image au clique pour passer à la suivante ou revenir à la première s'il on est au bou du carrousel
  function handelClickNext() {
    nbPicture < nbImage - 1
      ? setNbPicture(nbPicture + 1)
      : setNbPicture(0);
  }
  //change d'image pour revenir à la précédente ou passe à la dernière s'il on est à la première image
  function handelClickPrev() {
    nbPicture > 0
      ? setNbPicture(nbPicture - 1)
      : setNbPicture(nbImage - 1);
  }
  return (
    <StyledCarousel>
      {allCarrouselImg[nbPicture]}
      <CarrouselOverlay overlay={overlay}>
        <CarrouselPrev onClick={handelClickPrev} />
        <CarrouselNbOfPicture>{nbPicture+1}/{nbImage}</CarrouselNbOfPicture>
        <CarrouselNext onClick={handelClickNext} />{" "}
      </CarrouselOverlay>
    </StyledCarousel>
  );
}
Carrousel.propTypes = {
    Pictures : PropTypes.array,
 }


export default Carrousel;
