import styled from "styled-components";
import colors from "../utils/colors";

const StyledTag = styled.div`
display:flex;
justify-content : center;
align-items : center;
  min-width: 115px;
  min-height: 25px;
  margin-right: 10px;
  background-color: ${colors.primary};
  border-radius: 10px;
  color: ${colors.white};
  & p {
    margin: 0;
    padding: 0 10px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    @media (max-width: 600px){font-size:10px;}
  }
`;

function Tags({ tagName }) {
  return (
    <StyledTag>
      <p>{tagName}</p>
    </StyledTag>
  );
}

export default Tags;
