import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userInfo: {
    email: "",
    password: "",
    fullName: "",
    phone: "",
  },
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = { email: "", password: "", fullName: "", phone: "" };
    },
  },
});

export const { setUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;
