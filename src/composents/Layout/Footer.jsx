import styled from "styled-components";
import colors from "../../utils/colors";
import WhiteLogo from "../../assets/white-logo.png";

const StyledFooter = styled.footer`
  background-color: ${colors.black};
  width: 100%;
  height: 210px;
  @media (max-width: 600px) {
    margin-top:20px;
  }
`;
const FooterContent = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
`;
const FooterLogo = styled.img`
  width: 122px;
  margin: 62px auto 0;
  text-align: center;
`;
const FooterText = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 142.6%;
  color:${colors.white};
  @media (max-width: 600px) {
    font-size: 12px;
 
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterLogo src={WhiteLogo} alt="Footer logo de kasa" />
        <FooterText>© 2020 Kasa. All rights reserved</FooterText>
      </FooterContent>
    </StyledFooter>
  );
}

export default Footer;
