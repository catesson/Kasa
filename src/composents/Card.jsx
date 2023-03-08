
import styled from "styled-components";
import colors from "../utils/colors";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const StyledCard = styled(Link)`
display:flex;
align-items:end;
height: 340px;
width: 340px;
margin:0 25px 50px;
border-radius:10px;
background:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${({picture}) => picture});
background-position:center;
text-decoration:none;
@media (max-width: 600px){
    width:100%;
    margin:0 0 20px;
    height:255px;
}
`
const CardTitre = styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
padding:0 20px;

color:${colors.white};
`

function Card({title, picture, id}) {
    return(<StyledCard picture={picture} to={"/logements/"+id}>
        <CardTitre>{title}</CardTitre>
    </StyledCard>)
}

Card.protoType = {
    title : PropTypes.string, 
    picture : PropTypes.string,
    id: PropTypes.string
}

export default Card;