import styled from "styled-components";

const StyledContainer = styled.li`
  font-size: 20px;
`;

const Robot = ({ robot: { name, url, creation } }) => {
  return (
    <StyledContainer>
      <h2>{name}</h2>
      <img alt="robot" src={url} />
      <h3>{creation}</h3>
    </StyledContainer>
  );
};

export default Robot;
