import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../store'
import { setActiveTab, removeActiveTab } from '../tabsStoreSlice'

export function useActiveTab() {
  const dispatch: AppDispatch = useDispatch()
  const activeTab = useSelector((state: RootState) => state.tabs.activeTab)

  function setTab(tab: string) {
    dispatch(setActiveTab(tab))
  }

  function removeTab() {
    dispatch(removeActiveTab())
  }

  return {
    activeTab,
    setTab,
    removeTab
  }
}
