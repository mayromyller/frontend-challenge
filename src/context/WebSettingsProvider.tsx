import { createContext, useEffect, useState } from 'react'

import { VenueApi, WebSettingsType, getVenue } from '@/domain'
import { AxiosError } from 'axios'

type WebSettingsProps = Pick<
  WebSettingsType,
  | 'bannerImage'
  | 'backgroundColour'
  | 'navBackgroundColour'
  | 'primaryColour'
  | 'primaryColourHover'
>
type CurrencyType = Pick<VenueApi, 'currency' | 'locale'>

interface WebSettingsContextProps {
  webSettings: WebSettingsProps
  currencyType: CurrencyType
  isLoading: boolean
}

export const WebSettingsContext = createContext({} as WebSettingsContextProps)

export function WebSettingsProvider({ children }: React.PropsWithChildren) {
  const [webSettings, setWebSettings] = useState({
    bannerImage: '',
    backgroundColour: '#fff',
    navBackgroundColour: '#111',
    primaryColour: '#111',
    primaryColourHover: '#111'
  } as WebSettingsProps)

  const [currencyType, setCurrencyType] = useState({
    currency: 'BRL',
    locale: 'pt-BR'
  } as CurrencyType)
  const [isLoading, setIsLoading] = useState(true)

  async function fetchData() {
    try {
      const { data } = await getVenue(9)
      setWebSettings(data.webSettings)
      setCurrencyType({
        currency: data.ccy,
        locale: data.locale
      })
    } catch (error) {
      if (error instanceof AxiosError) {
        /*Adding code so that if an API call fails with CORS problems, a mock of the data is added */
        // setWebSettings({
        //   bannerImage:
        //     'https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png',
        //   backgroundColour: '#ffffff',
        //   primaryColour: '#4f372f',
        //   primaryColourHover: '#4f372f',
        //   navBackgroundColour: '#4f372f'
        // })
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <WebSettingsContext.Provider
      value={{ webSettings, isLoading, currencyType }}
    >
      {children}
    </WebSettingsContext.Provider>
  )
}
