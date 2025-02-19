import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  cartItemList: []
}

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart:(state, action) => {
      const {idProduct, quantityProduct, sizeProduct} = action.payload
      const existingCartId = state.cartItemList.find(item => item.idProduct === idProduct && item.sizeProduct === sizeProduct)
      if(existingCartId){
        existingCartId.quantityProduct += quantityProduct
      }
      else {
        state.cartItemList.push(action.payload)
      }
    },
    removeCart:(state, action)=> {
      const string = action.payload
      const updateCart = state.cartItemList.filter(item=> {
        const stringState = item.idProduct + item.sizeProduct
        return stringState !== string
      })
      state.cartItemList = updateCart
    }
  }
})

export const {addToCart, removeCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;