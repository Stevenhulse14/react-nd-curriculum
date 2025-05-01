import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/features/todoSlice";
import userReducer from "../redux/features/userSlice";
// import my Slices

export const store = configureStore({
  reducer: {
    // this where I add my reducers
    todos: todoReducer,
    users: userReducer,
  },
});
