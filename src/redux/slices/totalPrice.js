import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalPrice: 0,
};

export const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState,
  reducers: {
    updatePrice: (state, action) => {
      const { priceProduct, quantityProduct } = action.payload;
      const totalPrice = quantityProduct * priceProduct + state.totalPrice;
      state.totalPrice = totalPrice;
    },
    resetPrice: (state, action) => {
      const { priceProduct, quantityProduct } = action.payload;
      const totalPrice = state.totalPrice - quantityProduct * priceProduct;
      state.totalPrice = totalPrice;
    },
    upPrice: (state, action) => {
      const { priceProduct } = action.payload;
      const totalPrice = state.totalPrice + priceProduct;
      state.totalPrice = totalPrice;
    },
    downPrice: (state, action) => {
      const { priceProduct } = action.payload;
      const totalPrice = state.totalPrice -  priceProduct;
      state.totalPrice = totalPrice;
    },
    initPrice: (state)=> {
      state.totalPrice = 0
    }
  },
});

export const { updatePrice, resetPrice, upPrice, downPrice, initPrice } = totalPriceSlice.actions;
export default totalPriceSlice.reducer;
