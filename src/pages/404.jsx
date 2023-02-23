import styled from "styled-components";
import colors from "../utils/colors";
import { Link } from "react-router-dom";


const StyledError = styled.div`

`

const ErrorNumber = styled.h1`
margin:129px auto 66px;
    color:${colors.primary};
    font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 288px;
line-height: 142.6%;
text-align: center;
@media (max-width:600px) {
    font-size: 96px;
    margin-bottom:11px;
}
`

const ErrorText = styled.p`
color:${colors.primary};
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 142.6%;
text-align:center;
@media (max-width: 600px) {
    font-size: 18px;
}
`


const ErrorLink = styled(Link)`
display:block;
margin:182px auto 182px;
color:${colors.primary};
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
text-decoration-line: underline;
text-align:center;
@media (max-width: 600px) {
    font-size: 14px;
    margin:133px auto 133px;
}`

function Error() {
    return (<StyledError>
        <ErrorNumber>404</ErrorNumber>
        <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
        <ErrorLink  to="/">Retourner sur la page d’accueil</ErrorLink>
    </StyledError>)
}

export default Error