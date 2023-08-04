import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: "",
};

// user 슬라이스로 로그인이면 사용자 정보를 currentUser에 저장, 로그아웃하면 null
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
