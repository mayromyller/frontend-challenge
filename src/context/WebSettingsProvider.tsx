import { createContext, useEffect, useState } from 'react'

import { VenueApi, WebSettingsType, getVenue } from '@/domain'

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
      console.log(error)
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
