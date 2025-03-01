import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
};

export const emailVerifySlice = createSlice({
  name: "emailVerify",
  initialState,
  reducers: {
    setEmailVerify: (state, action) => {
      state.email = action.payload;
    },
    toggleEmailVerify: (state) => {
      state.email = "";
    },
  },
});

export const { setEmailVerify, toggleEmailVerify } = emailVerifySlice.actions;
export default emailVerifySlice.reducer;
