import RobotList from "../components/RobotList/RobotList";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled.div`
  button {
    font-size: 20px;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();
  const redirectToForm = () => {
    navigate("add-robot");
  };

  return (
    <StyledContainer>
      <div className="App">
        <h1>Crazy robots living the fast life</h1>
        <button onClick={redirectToForm}>Add new robot</button>
        <RobotList />
        <footer>Created by Stelios</footer>
      </div>
    </StyledContainer>
  );
};

export default HomePage;
