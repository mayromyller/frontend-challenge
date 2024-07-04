import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TabsStoreType } from './tabsStoreType'

const initialState: TabsStoreType = {
  activeTab: null
}

const tabsStoreSlice = createSlice({
  name: 'tabsStore',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload
    },
    removeActiveTab: (state) => {
      state.activeTab = null
    }
  }
})

export const { setActiveTab, removeActiveTab } = tabsStoreSlice.actions
export default tabsStoreSlice.reducer
