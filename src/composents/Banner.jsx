import styled from "styled-components";
import colors from "../utils/colors";
import PropTypes from 'prop-types'

const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1240px;
  height: 223px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${({picture}) => picture});
  border-radius: 25px;
  background-position: center;
`;

const BannerTxt = styled.p`
  margin: 0px;
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  color: ${colors.white};
  @media (max-width: 600px) {
    font-size: 24px;
  text-align:left;
margin-left:16px;}
`;

function Banner({picture, text}) {

  return (
    <StyledBanner picture={picture}>
      <BannerTxt>{text}</BannerTxt>
    </StyledBanner>
  );
}

Banner.propTypes = {
  picture : PropTypes.string,
  text : PropTypes.string,
}
export default Banner;
