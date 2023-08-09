import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  diaries: "",
};

export const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    getDiary: (state, action) => {
      state.diaries = action.payload;
    },
  },
});

export const { getDiary } = diarySlice.actions;

export default diarySlice.reducer;
