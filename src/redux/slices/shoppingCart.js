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
    },
    updateCart:(state, action)=> {
      const {idProduct, quantityProduct, sizeProduct} = action.payload
      console.log(action.payload)
      const existingCartIndex = state.cartItemList.findIndex(item => item.idProduct === idProduct && item.sizeProduct === sizeProduct)
      if (existingCartIndex !== -1) {
        state.cartItemList[existingCartIndex].quantityProduct = quantityProduct;
      }
    },
    resetCart:(state)=> {
      state.cartItemList = []
    }
  }
})

export const {addToCart, removeCart, updateCart, resetCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;