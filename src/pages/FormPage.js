import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DetailedRobot from "../components/DetailedRobot/DetailedRobot";
import { useEffect } from "react";
import { loadRobotByIdThunk } from "../redux/thunks/thunks";
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
