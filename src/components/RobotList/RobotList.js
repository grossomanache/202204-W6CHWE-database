import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { loadRobotsThunk } from "../../redux/thunks/thunks";
import Robot from "../Robot/Robot";

const StyledContainer = styled.ul`
  font-size: 20px;
  list-style-type: none;
  padding: 0;
`;

const RobotList = () => {
  const dispatch = useDispatch();
  const { collection: robots } = useSelector((state) => state.robots);
  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <StyledContainer>
      {robots.map((robot) => (
        <Robot robot={robot} key={robot._id} />
      ))}
    </StyledContainer>
  );
};

export default RobotList;
