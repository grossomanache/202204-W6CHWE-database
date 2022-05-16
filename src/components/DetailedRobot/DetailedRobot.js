import styled from "styled-components";

const StyledContainer = styled.div`
  font-size: 20px;
  background-color: lightblue;
  border: 2px grey solid;
  margin: 20px 50px;
  height: auto;
  img {
    width: 100%;
  }
`;

const DetailedRobot = ({
  robot: { name, url, creation, speed, resistance, description },
}) => {
  return (
    <StyledContainer>
      <h2>{name}</h2>
      <img alt="robot" src={url} />
      <h3>Creation date: {creation.slice(0, 10)}</h3>
      <p>Strength: {speed}</p>
      <p>Resistance: {resistance}</p>
      <p>Description: {description}</p>
    </StyledContainer>
  );
};

export default DetailedRobot;
