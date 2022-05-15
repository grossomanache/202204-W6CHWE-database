const { loadRobotsActionCreator } = require("../features/robots/robotsSlice");

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const apiResponse = await response.json();
  dispatch(loadRobotsActionCreator(apiResponse));
};

export const loadRobotByIdThunk = (id) => async (dispatch) => {
  const route = `${process.env.REACT_APP_API_URL}/${id}`;
  const response = await fetch(route);
  const apiResponse = await response.json();
  dispatch(loadRobotsActionCreator([apiResponse]));
};
