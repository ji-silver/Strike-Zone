import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  records: [],
};

export const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    getRecord: (state, action) => {
      state.records = action.payload;
    },
    editRecord: (state, action) => {
      state.records = action.payload;
    },
    // payload에서 받은 id와 일치하지 않는 것만 제외하고 새로운 배열 생성
    deleteRecord: (state, action) => {
      const recordIdToDelete = action.payload;
      state.records = state.records.filter(
        (record) => record._id !== recordIdToDelete
      );
    },
  },
});

export const { getRecord, editRecord, deleteRecord } = recordSlice.actions;

export default recordSlice.reducer;
