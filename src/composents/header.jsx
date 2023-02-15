import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/colors";
import logo from "../assets/logo.png"

const StyledHeader = styled.header`
  display: flex;
  width: 1240px;
  height: 68px;
  margin: 0 auto;
`;
const StyledNav = styled.nav`
  display:flex;
    justify-content: flex-end;
    width: 309px;
  height: 34px;
`;

const StyledLink = styled(Link)`
    padding-left:56px;
    text-align: right;
    color : ${colors.primary};
    text-decoration:none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%;
`;

function Header() {
  return (
    <StyledHeader>
        <img src={logo} alt="logo de kasa"/>
      <StyledNav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/a-propos">À Propos</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
