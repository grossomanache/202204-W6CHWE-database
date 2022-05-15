import styled from "styled-components";
import { Link } from "react-router-dom";
import Form from "../components/Form/Form";

const StyledContainer = styled.div`
  height: 100vh;
  a {
    padding: 20px 0;
    margin: 0;
    text-decoration: none;
    h1 {
      margin: 0;
    }
    &:visited {
      color: black;
    }
  }
`;

const FormPage = () => {
  return (
    <StyledContainer>
      <Link to="/">
        <h1>Crazy robots living the fast life</h1>
      </Link>
      <Form />
      <footer>Created by Stelios</footer>
    </StyledContainer>
  );
};

export default FormPage;
