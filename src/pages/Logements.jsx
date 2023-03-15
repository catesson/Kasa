import styled from "styled-components";
import colors from "../utils/colors";
import Carrousel from "../composents/Caroussel";
import Tags from "../composents/Tags";
import Collapse from "../composents/Collapse";
import data from "../data/logements.json";
import Rating from "../composents/Avis";

const StyledLogement = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  & > div {
    min-width: 20%;
  }
`;

const LogementsInfo = styled.div`
  display:flex;
  flex-direction: column;
  @media (max-width: 600px){
    width:100%;
    justify-content:space-between; 
    flex-direction: row-reverse;
    align-items:center;
    margin-top:15px;
  }
`

const LogementsTitle = styled.h1`
  margin: 30px 0 0;
  color: ${colors.primary};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 142.6%;
  @media (max-width: 600px){
    margin-top:15px;
    font-size:18px;}
`;

const LogementsLocation = styled.h3`
  margin: 0;
  color: ${colors.primary};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 600px){font-size:14px;}
`;

const LogementsTags = styled.div`
  margin-top: 20px;
  display: flex;
  @media (max-width: 600px){margin-top: 12px;}`;

const LogementsCollapse = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between; 
  
  & > div {
    width: 45%;
    margin: 0;
    & p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
    }
  }
 @media (max-width: 600px){
  margin:0;
    flex-direction:column;
    & > div {
      width:100%;
      margin-top:20px;
      & p{
       font-size: 12px;
      }
    }
  }
`;

const Host = styled.div`
  display: flex;
  justify-content:end;
  margin-top:30px;
  @media (max-width: 600px){
    margin:0;
  align-items:center;}

`;
const HostPicture = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 30px;
  @media (max-width: 600px){width: 32px;
    height: 32px;}
`;
const HostName = styled.p`
margin-right:10px;
  color: ${colors.primary};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 600px){font-size:12px;}
`;


function Logements({ logementID }) {
  //récupération du logement dont l'id est passer en props
  const logement = data.find((logement) => logement.id === logementID);
  //récupération des différent tag du logement
  const tags = logement.tags.map((tag) => <Tags key={tag} tagName={tag} />);
  const equipement = logement.equipments.map((equipement, index) => (
     <span key={index}>{equipement} <br/></span> 
  ));
  const firstName = logement.host.name.split(" ")[0];
  const lastName = logement.host.name.split(" ")[1];
  return (
    <div>
      <Carrousel Pictures={logement.pictures}></Carrousel>
      <StyledLogement>
        <div>
          <LogementsTitle>{logement.title}</LogementsTitle>
          <LogementsLocation>{logement.location}</LogementsLocation>
          <LogementsTags>{tags}</LogementsTags>
        </div>
        <LogementsInfo>
          <Host>
            <HostName>
              {firstName}
              <br />
              {lastName}
            </HostName>
            <HostPicture src={logement.host.picture} />
          </Host>
          <Rating rating={logement.rating}></Rating>
        </LogementsInfo>
      </StyledLogement>
      <LogementsCollapse>
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={equipement} />
      </LogementsCollapse>
    </div>
  );
}

export default Logements;
