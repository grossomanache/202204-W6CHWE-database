import { loadRobotsActionCreator } from "../features/robots/robotsSlice";

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const apiResponse = await response.json();
  dispatch(loadRobotsActionCreator(apiResponse));
};
