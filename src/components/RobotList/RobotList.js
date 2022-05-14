import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { loadRobotsThunk } from "../../redux/thunks/thunks";
import Robot from "../Robot/Robot";

const StyledContainer = styled.ul`
  font-size: 20px;
`;

const RobotList = () => {
  const dispatch = useDispatch();
  const robots = useSelector((state) => state.robots);
  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  return (
    <StyledContainer>
      {robots.map((robot) => (
        <Robot robot={robot} />
      ))}
    </StyledContainer>
  );
};

export default RobotList;
