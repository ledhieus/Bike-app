import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tokenUser: null,
};

export const tokenUserSlice = createSlice({
  name: "tokenUser",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.tokenUser = action.payload;
    },
    toggleToken: (state) => {
      state.tokenUser = null;
    },
  },
});

export const { setToken, toggleToken } = tokenUserSlice.actions;
export default tokenUserSlice.reducer;
