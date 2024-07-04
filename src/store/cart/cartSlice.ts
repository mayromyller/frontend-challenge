import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartState, Product } from './cartTypes'

const initialState: CartState = {
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      )
      if (productIndex !== -1) {
        state.products[productIndex].quantity += 1
      } else {
        state.products.push({
          ...action.payload,
          quantity: action.payload.quantity
        })
      }
    },
    incrementedProduct: (state, action: PayloadAction<number>) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      )
      if (product) {
        product.quantity += 1
      }
    },
    decrementProduct: (state, action: PayloadAction<number>) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      )
      if (product && product.quantity > 1) {
        product.quantity -= 1
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        )
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    }
  }
})

export const {
  addProduct,
  incrementedProduct,
  decrementProduct,
  removeProduct
} = cartSlice.actions
export default cartSlice.reducer
