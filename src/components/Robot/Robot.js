import styled from "styled-components";
const moment = require("moment");

const StyledContainer = styled.li`
  font-size: 20px;
  background-color: lightblue;
  border: 2px grey solid;
  margin: 20px 50px;
  img {
    width: 100%;
  }
`;

const Robot = ({ robot: { name, url, creation, speed, resistance } }) => {
  return (
    <StyledContainer>
      <h2>{name}</h2>
      <img alt="robot" src={url} />
      <h3>Creation date: {creation.slice(0, 10)}</h3>
      <p>Strength: {speed}</p>
      <p>Resistance: {resistance}</p>
    </StyledContainer>
  );
};

export default Robot;
