import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice";
console.log(studentReducer);

export default configureStore({
  reducer: {
    student: studentReducer,
  },
});
