import { configureStore } from '@reduxjs/toolkit'
import tabReducer from './tabsStore/tabsStoreSlice'
import cartReducer from './cart/cartSlice'

export const store = configureStore({
  reducer: {
    tabs: tabReducer,
    cart: cartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
