import styled from "styled-components";
import colors from "../utils/colors";
import Card from "./Card";
import logements from "../data/logements.json";

const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 43px;
  padding: 56px 25px;
  background-color: ${colors.background};
  border-radius: 25px;
  @media (max-width: 600px){
    width:100%;
    padding:0;
    background-color: ${colors.white};
  }

`;
function Gallery() {
  const allCards = logements.map((logement) => (
    <Card
      key={logement.id}
      title={logement.title}
      picture={logement.pictures[0]}
      id={logement.id}
    ></Card>
  ));
  return <StyledGallery>{allCards}</StyledGallery>;
}

export default Gallery;
