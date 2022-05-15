import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import DetailedRobot from "../components/DetailedRobot/DetailedRobot";

const StyledContainer = styled.div`
  background-color: floralwhite;
  font-family: "Roboto", sans-serif;
  text-align: center;
  h1 {
    padding: 20px 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    &:visited {
      color: black;
    }
  }
  footer {
    padding: 20px 0;
  }
`;

const DetailPage = () => {
  const startingIndex = useLocation().pathname.lastIndexOf("/");
  const robotId = useLocation().pathname.substring(startingIndex + 1);
  const robot = useSelector((state) => state.robots).find(
    (robot) => robot._id === robotId
  );
  return (
    <StyledContainer>
      <Link to="/home">
        <h1>Crazy robots living the fast life</h1>
      </Link>
      <DetailedRobot robot={robot} />
      <footer>Created by Stelios</footer>
    </StyledContainer>
  );
};

export default DetailPage;
