import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./slices/shoppingCart"
import totalPriceReducer from "./slices/totalPrice"
import overlayReducer from "./slices/overlay"
import emailVerifyReducer from "./slices/emailVerify"
import userInfoReducer from "./slices/userInfo"
import tokenUserSlice from "./slices/tokenUser";
export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    totalPrice: totalPriceReducer,
    overlay: overlayReducer,
    emailVerify: emailVerifyReducer,
    userInfo: userInfoReducer,
    tokenUser: tokenUserSlice,
  }
})