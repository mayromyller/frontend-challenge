import { useDispatch, useSelector } from 'react-redux'

import { TabDispatch, TabActiveState } from '../tabsStore'
import { setActiveTab, removeActiveTab } from '../tabsStoreSlice'

export function useActiveTab() {
  const dispatch: TabDispatch = useDispatch()
  const activeTab = useSelector((state: TabActiveState) => state.tabs.activeTab)

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
