import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/colors";
import logo from "../../assets/logo.png";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  height: 68px;
  margin: 40px auto;
  @media (max-width: 600px) {
    margin:20px auto;
    & img {
      width: 145px;
      height: 47px;
    }
  }
`;
const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 309px;
  height: 34px;
`;

const HeaderLink = styled(Link)`
  padding-left: 56px;
  text-align: right;
  color: ${colors.primary};
  text-decoration: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 142.6%;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    padding-left: 10px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="logo de kasa" />
      <HeaderNav>
        <HeaderLink to="/">Accueil</HeaderLink>
        <HeaderLink to="/a-propos">À Propos</HeaderLink>
      </HeaderNav>
    </StyledHeader>
  );
}

export default Header;
