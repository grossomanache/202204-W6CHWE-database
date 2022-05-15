import { createSlice } from "@reduxjs/toolkit";

const robotsSlice = createSlice({
  name: "robots",
  initialState: [],
  reducers: {
    loadRobots: (robots, action) => [...action.payload],
    resetRobots: (robots, action) => [],
  },
});

export const {
  loadRobots: loadRobotsActionCreator,
  resetRobots: resetRobotsActionCreator,
} = robotsSlice.actions;

export default robotsSlice.reducer;
