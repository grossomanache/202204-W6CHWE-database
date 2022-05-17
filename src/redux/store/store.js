import { configureStore } from "@reduxjs/toolkit";
import robotsReducer from "../features/robots/robotsSlice";
import usersReducer from "../features/robots/userSlice";

const store = configureStore({
  reducer: {
    robots: robotsReducer,
    users: usersReducer,
  },
});

export default store;
