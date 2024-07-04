import { useContext } from 'react'

import { WebSettingsContext } from '../context/WebSettingsProvider'

export function useWebSettings() {
  const { webSettings, isLoading } = useContext(WebSettingsContext)

  return {
    webSettings,
    isLoading
  }
}
