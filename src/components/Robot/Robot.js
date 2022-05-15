import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetRobotsActionCreator } from "../../redux/features/robots/robotsSlice";

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
  const dispatch = useDispatch();
  const resetRobots = () => {
    dispatch(resetRobotsActionCreator());
  };

  return (
    <StyledContainer key={_id}>
      <h2>{name}</h2>
      <Link to={`/detail/${_id}`} onClick={resetRobots}>
        <img alt="robot" src={url} height="100%" width="100%" />
      </Link>
    </StyledContainer>
  );
};

export default Robot;
