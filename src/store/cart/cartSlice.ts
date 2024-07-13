import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartState, Product } from './cartTypes'
import { ModifierItem } from '@/domain'

const initialState: CartState = {
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push({
        ...action.payload
      })
    },
    incrementedProduct: (
      state,
      action: PayloadAction<{
        itemId: number | string
        modifierItem?: ModifierItem | null
      }>
    ) => {
      const product = state.products.find(
        (product) => product.itemId === action.payload.itemId
      )
      if (product) {
        product.quantity += 1
      }
    },
    decrementProduct: (
      state,
      action: PayloadAction<{
        itemId: number | string
        modifierItem?: ModifierItem | null
      }>
    ) => {
      const product = state.products.find(
        (product) => product.itemId === action.payload.itemId
      )
      if (product && product.quantity > 1) {
        product.quantity -= 1
      } else {
        state.products = state.products.filter(
          (product) => product.itemId !== action.payload.itemId
        )
      }
    },
    removeProduct: (
      state,
      action: PayloadAction<{ itemId: number | string }>
    ) => {
      state.products = state.products.filter(
        (product) => product.itemId !== action.payload.itemId
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
