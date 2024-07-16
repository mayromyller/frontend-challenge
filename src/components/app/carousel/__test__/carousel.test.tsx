import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { Carousel } from '../carousel'
import { MenuApi } from '@/domain'

import { useDispatch, useSelector } from 'react-redux'
import { WebSettingsProvider } from '@/context'
import _data from '../../../data'
import { Product } from 'src/store/cart/cartTypes'

import { useWebSettings } from '@/hooks'

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn()
}))

vi.mock('@/hooks', () => ({
  useWebSettings: vi.fn()
}))

describe('Carousel', () => {
  const dispatch = vi.fn()

  const cartProducts: Product[] = [
    {
      id: 1625701,
      itemId: '1',
      name: 'Hard Core',
      quantity: 1,
      price: 10
    },
    {
      id: 1625702,
      itemId: '2',
      name: 'Smash Brooks',
      quantity: 2,
      price: 20
    }
  ]

  const webSettings = {
    webSettings: {
      bannerImage: '',
      backgroundColour: '#fff',
      navBackgroundColour: '#111',
      primaryColour: '#111',
      primaryColourHover: '#111'
    },
    isLoading: false,
    currencyType: {
      currency: 'BRL',
      locale: 'pt-BR'
    }
  }

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useDispatch).mockReturnValue(dispatch)
    vi.mocked(useSelector).mockReturnValue(cartProducts)
    vi.mocked(useWebSettings).mockReturnValue(webSettings)
  })

  it('should render carousel correctly', () => {
    const data = _data as MenuApi

    const { getByText } = render(
      <WebSettingsProvider>
        <Carousel data={data} />
      </WebSettingsProvider>
    )

    expect(getByText('Burgers')).toBeInTheDocument()
    expect(getByText('Drinks')).toBeInTheDocument()
    expect(getByText('Desserts')).toBeInTheDocument()
  })
})
