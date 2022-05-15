import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledContainer = styled.li`
  font-size: 20px;
  background-color: lightblue;
  border: 2px grey solid;
  margin: 20px 50px;
  img {
    width: 100%;
    padding-bottom: 80px;
  }
`;

const Robot = ({ robot: { name, url, creation, _id } }) => {
  return (
    <StyledContainer>
      <h2>{name}</h2>
      <Link to={`/detail/${_id}`}>
        <img alt="robot" src={url} />
      </Link>
    </StyledContainer>
  );
};

export default Robot;
