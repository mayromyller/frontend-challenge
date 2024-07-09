import { useContext } from 'react'

import { WebSettingsContext } from '../context/WebSettingsProvider'

export function useWebSettings() {
  const { webSettings, isLoading, currencyType } =
    useContext(WebSettingsContext)

  return {
    webSettings,
    isLoading,
    currencyType
  }
}
