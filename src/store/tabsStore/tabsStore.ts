import { configureStore } from '@reduxjs/toolkit'
import tabReducer from './tabsStoreSlice'

export const store = configureStore({
  reducer: {
    tabs: tabReducer
  }
})

export type TabActiveState = ReturnType<typeof store.getState>
export type TabDispatch = typeof store.dispatch
