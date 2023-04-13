import { configureStore } from "@reduxjs/toolkit";
import userSystem from "./slice";

export default configureStore({
  reducer: {
    addToBox: userSystem,
  },
});
