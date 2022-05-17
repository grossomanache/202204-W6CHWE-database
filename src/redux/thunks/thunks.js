import axios from "axios";
import jwtDecode from "jwt-decode";
import { loadRobotsActionCreator } from "../features/robots/robotsSlice";
import { loginActionCreator } from "../features/robots/userSlice";

const token = `Bearer ${process.env.REACT_APP_TOKEN}`;

export const loadRobotsThunk = () => async (dispatch) => {
  const route = `${process.env.REACT_APP_API_URL}/robots`;
  const response = await fetch(route, {
    method: "GET",
    headers: { Authorization: token },
  });
  const apiResponse = await response.json();
  dispatch(loadRobotsActionCreator(apiResponse));
};

export const loadRobotByIdThunk = (id) => async (dispatch) => {
  const route = `${process.env.REACT_APP_API_URL}/robots/${id}`;
  const response = await fetch(route, {
    method: "GET",
    headers: { Authorization: token },
  });
  const apiResponse = await response.json();
  dispatch(loadRobotsActionCreator([apiResponse]));
};

export const validateUserThunk = (loginInformation) => async (dispatch) => {
  const route = `${process.env.REACT_APP_API_URL}/users/login`;
  const { data } = await axios.post(route, loginInformation);
  localStorage.setItem("token", data.token);
  const userInfo = jwtDecode(data.token);
  dispatch(loginActionCreator(userInfo));
};
