import { createContext, useEffect, useState } from 'react'

import { AxiosError } from 'axios'

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

      setWebSettings({
        bannerImage:
          'https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png',
        backgroundColour: '#ffffff',
        primaryColour: '#4f372f',
        primaryColourHover: '#4f372f',
        navBackgroundColour: '#4f372f'
      })
    } catch (error) {
      if (error instanceof AxiosError) {
        setWebSettings({
          bannerImage:
            'https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png',
          backgroundColour: '#ffffff',
          primaryColour: '#4f372f',
          primaryColourHover: '#4f372f',
          navBackgroundColour: '#4f372f'
        })
      }
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
