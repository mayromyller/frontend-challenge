import { createContext, useEffect, useState } from 'react'

import { WebSettingsType, getVenue } from '@/domain'

type WebSettingsProps = Pick<
  WebSettingsType,
  | 'bannerImage'
  | 'backgroundColour'
  | 'navBackgroundColour'
  | 'primaryColour'
  | 'primaryColourHover'
>

interface WebSettingsContextProps {
  webSettings: WebSettingsProps
  isLoading: boolean
}

export const WebSettingsContext = createContext({} as WebSettingsContextProps)

export function WebSettingsProvider({ children }: React.PropsWithChildren) {
  const [webSettings, setWebSettings] = useState({} as WebSettingsProps)
  const [isLoading, setIsLoading] = useState(true)

  async function fetchData() {
    try {
      const { data } = await getVenue(9)
      setWebSettings(data.webSettings)

      setWebSettings(data.webSettings)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <WebSettingsContext.Provider value={{ webSettings, isLoading }}>
      {children}
    </WebSettingsContext.Provider>
  )
}
