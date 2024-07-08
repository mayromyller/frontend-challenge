import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

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
      const idProduct = uuidv4()

      state.products.push({
        id: action.payload.id,
        itemId: idProduct,
        name: action.payload.name,
        price: action.payload.price,
        modifierItem: action.payload.modifierItem,
        quantity: action.payload.quantity
      })
    },
    incrementedProduct: (
      state,
      action: PayloadAction<{
        itemId: number | string
        modifierItem?: ModifierItem
      }>
    ) => {
      const product = state.products.find(
        (product) =>
          product.itemId === action.payload.itemId &&
          (!action.payload.modifierItem ||
            JSON.stringify(product.modifierItem) ===
              JSON.stringify(action.payload.modifierItem))
      )
      if (product) {
        product.quantity += 1
      }
    },
    decrementProduct: (
      state,
      action: PayloadAction<{
        itemId: number | string
        modifierItem?: ModifierItem
      }>
    ) => {
      const product = state.products.find(
        (product) =>
          product.itemId === action.payload.itemId &&
          (!action.payload.modifierItem ||
            JSON.stringify(product.modifierItem) ===
              JSON.stringify(action.payload.modifierItem))
      )
      if (product && product.quantity > 1) {
        product.quantity -= 1
      } else {
        state.products = state.products.filter(
          (product) =>
            product.itemId !== action.payload.itemId &&
            (!action.payload.modifierItem ||
              JSON.stringify(product.modifierItem) !==
                JSON.stringify(action.payload.modifierItem))
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
