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

// "id":7602,
//     "name":"BURGERS RESTAURANT",
//     "internalName":"BURGERS RESTAURANT",
//     "description":null,
//     "liveFlag":1,
//     "demoFlag":1,
//     "address1":"Rua XX-X, 1-11",
//     "address2":"XXX",
//     "address3":null,
//     "city":"Bauru",
//     "county":"BR",
//     "postcode":"17012-360",
//     "country":"BR",
//     "timezoneOffset":"-03:00",
//     "locale":"pt-BR",
//     "timeZone":"America/Sao_Paulo",
//     "webSettings":{
//        "id":5854,
//        "venueId":7602,
//        "bannerImage":"https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png",
//        "backgroundColour":"#ffffff",
//        "primaryColour":"#4f372f",
//        "primaryColourHover":"#4f372f",
//        "navBackgroundColour":"#4f372f"
//     },
//     "ccy":"BRL",
//     "ccySymbol":"R$",
//     "currency":"R$"
