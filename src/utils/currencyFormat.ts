/* eslint-disable react-hooks/rules-of-hooks */
import { useWebSettings } from '@/hooks'

export function currencyFormat(value: number): string {
  const { currencyType } = useWebSettings()

  const formattedValue = new Intl.NumberFormat(currencyType.locale, {
    style: 'currency',
    currency: currencyType.currency,
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)

  return formattedValue ?? ''
}
