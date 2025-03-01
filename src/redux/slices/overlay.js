import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpenOverlay: false,
};

export const overlaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    setOverlayState: (state, action) => {
      state.isOpenOverlay = action.payload;
    },
    toggleOverlay: (state) => {
      state.isOpenOverlay = !state.isOpenOverlay;
    },
  },
});

export const { setOverlayState, toggleOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;
