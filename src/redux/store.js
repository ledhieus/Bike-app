import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./slices/shoppingCart"
import totalPriceReducer from "./slices/totalPrice"
export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    totalPrice: totalPriceReducer
  }
})