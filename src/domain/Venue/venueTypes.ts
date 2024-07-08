export interface WebSettingsType {
  id: number
  venueId: number
  bannerImage: string
  backgroundColour: string
  primaryColour: string
  primaryColourHover: string
  navBackgroundColour: string
}

export interface VenueApi {
  id: number
  name: string
  internalName: string
  description: string
  city: string
  county: string
  postcode: string
  country: string
  timezoneOffset: string
  locale: string
  timeZone: string
  webSettings: WebSettingsType
  ccy: string
  ccySymbol: string
  currency: string
}
