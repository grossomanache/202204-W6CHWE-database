import { createSlice } from "@reduxjs/toolkit";

const robotsSlice = createSlice({
  name: "robots",
  initialState: {
    collection: [],
    newRobot: {
      name: "",
      url: "",
      created: "",
      strength: 0,
      resistance: 0,
      description: "",
    },
  },
  reducers: {
    loadRobots: (robots, action) => ({
      ...robots,
      collection: [...action.payload],
    }),
    resetRobots: (robots, action) => ({
      collection: [],
      newRobot: {
        name: "",
        url: "",
        created: "",
        strength: 0,
        resistance: 0,
        description: "",
      },
    }),
    addRobot: (robots, action) => ({
      ...robots,
      collection: [...robots.collection, action.payload],
    }),
    modifyProperty: (robots, action) => ({
      ...robots,
      newRobot: { ...robots.newRobot, ...action.payload },
    }),
  },
});

export const {
  loadRobots: loadRobotsActionCreator,
  resetRobots: resetRobotsActionCreator,
  addRobot: addRobotActionCreator,
  modifyProperty: modifyPropertyActionCreator,
} = robotsSlice.actions;

export default robotsSlice.reducer;
