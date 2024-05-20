import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStudentApi, deletStudentApi } from "../api/getStudent";
export const getFetchStuData = createAsyncThunk(
  "getFetchStuData",
  async (seachStr, thunkAPI) => {
    const response = await getStudentApi(seachStr);
    thunkAPI.dispatch(setStudent(response.data));
    return response.data;
  }
);

export const deleteStuData = createAsyncThunk(
  "deleteStuData",
  async (id, thunkAPI) => {
    thunkAPI.dispatch(deletStudent(id));
    const response = await deletStudentApi(id);
    return response.data;
  }
);

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    studentList: [],
  },
  reducers: {
    setStudent: (state, { payload }) => {
      state.studentList = payload;
    },
    deletStudent: (state, { payload }) => {
      state.studentList = state.studentList.filter(
        (item) => item.id != payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStudent, deletStudent } = studentSlice.actions;

export default studentSlice.reducer;
