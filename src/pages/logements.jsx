import styled from "styled-components";
import colors from "../utils/colors";
import Carrousel from "../composents/Caroussel";
import Tags from "../composents/Tags";
import Collapse from "../composents/Collapse";
import data from "../data/logements.json";

const LogementsTitle = styled.h1`
  margin: 30px 0 0;
  color: ${colors.primary};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 142.6%;
`;

const LogementsLocation = styled.h3`
  margin: 0;
  color: ${colors.primary};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
`;

const LogementsTags = styled.div`
  margin-top: 20px;
  display: flex;
`;

const LogementsCollapse = styled.div`
margin-top:25px;
  display: flex;
  justify-content: space-between;
  &>div{
    width:45%;
    margin :0;
    & p{
        font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
    }
  }
`;




function Logements({ logementID }) {
  //récupération du logement dont l'id est passer en props
  const logement = data.find((logement) => logement.id === logementID);
  //récupération des différent tag du logement
  const tags = logement.tags.map((tag) => <Tags key={tag} tagName={tag} />);
  const equipement = logement.equipments.map((equipement) => <p>{equipement} <br/></p>)

  return (
    <div>
      <Carrousel Pictures={logement.pictures}></Carrousel>
      <LogementsTitle>{logement.title}</LogementsTitle>
      <LogementsLocation>{logement.location}</LogementsLocation>
      <LogementsTags>{tags}</LogementsTags>
      <LogementsCollapse>
       
     <Collapse title="Description" content={logement.description}/>
       <Collapse title="Équipements" content={equipement}/>
      </LogementsCollapse>
    </div>
  );
}

export default Logements;
