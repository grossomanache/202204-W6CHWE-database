import RobotList from "./components/RobotList/RobotList";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: floralwhite;
  font-family: "Roboto", sans-serif;
  text-align: center;
  h1 {
    padding: 20px 0;
    margin: 0;
  }
  footer {
    padding: 20px 0;
  }
`;

function App() {
  return (
    <StyledContainer>
      <div className="App">
        <h1>Crazy robots living the fast life</h1>
        <RobotList />
        <footer>Created by Stelios</footer>
      </div>
    </StyledContainer>
  );
}

export default App;
