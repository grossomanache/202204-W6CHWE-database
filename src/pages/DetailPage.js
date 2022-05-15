import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DetailedRobot from "../components/DetailedRobot/DetailedRobot";
import { useEffect } from "react";
import { loadRobotByIdThunk } from "../redux/thunks/thunks";

const StyledContainer = styled.div`
  height: 100vh;
  a {
    text-decoration: none;
    color: black;
  }
`;

const DetailPage = () => {
  const startingIndex = useLocation().pathname.lastIndexOf("/");
  const robotId = useLocation().pathname.substring(startingIndex + 1);
  const dispatch = useDispatch();

  const robot = useSelector((state) => state.robots[0]);
  useEffect(() => {
    dispatch(loadRobotByIdThunk(robotId));
  }, [dispatch, robotId]);

  return (
    <StyledContainer>
      <Link to="/">
        <h1>Crazy robots living the fast life</h1>
      </Link>
      {robot && <DetailedRobot robot={robot} />}

      <footer>Created by Stelios</footer>
    </StyledContainer>
  );
};

export default DetailPage;
