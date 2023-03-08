import { useState } from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import arrow from "../assets/arrow.png";
import PropTypes from 'prop-types'


const StyledCollapse = styled.div`
  margin: 33px auto 0;
  width: 82%;
`;

const CollapseTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 47px;
  padding: 0 18px;
  background-color: ${colors.primary};
  border-radius: 5px;
  & h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%;
    color: ${colors.white};
    @media (max-width: 600px){font-size: 13px;}
  }
`;
const CollapseArrow = styled.img`
  transform: ${(props) => (props.beOpen ? `rotate(0deg);` : `rotate(180deg);`)};
`;
const CollapseContent = styled.div`
  display: ${(props) => (props.beOpen ? `block` : `none`)};
  border-radius: 5px;
  background-color: ${colors.background};
  padding: 27px 0;

  & p {
    margin: 0 18px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 142.6%;
    color: ${colors.primary};
    @media (max-width: 600px){font-size: 12px;}
    
  }
`;

function Collapse({ title, content }) {
  const [beOpen, setBeOpen] = useState(false);

  return (
    <StyledCollapse>
      <CollapseTitle onClick={() => setBeOpen(!beOpen)}>
        <h2>{title}</h2>
        <CollapseArrow
          beOpen={beOpen}
          src={arrow}
          alt="flèche pour déplier replier"
        />
      </CollapseTitle>
      <CollapseContent beOpen={beOpen}>
        <p>{content}</p>
      </CollapseContent>
    </StyledCollapse>
  );
}

Collapse.protoType = {
  title: PropTypes.string,
  content : PropTypes.string
}

export default Collapse;
