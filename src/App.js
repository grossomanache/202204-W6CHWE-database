import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: floralwhite;
  font-family: "Roboto", sans-serif;
  text-align: center;
  height: 100vh;
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
    <>
      <StyledContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/add-robot" element={<FormPage />} />
        </Routes>
      </StyledContainer>
    </>
  );
}

export default App;
