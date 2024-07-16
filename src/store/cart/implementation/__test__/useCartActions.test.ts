import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook } from '@testing-library/react-hooks'
import { useDispatch, useSelector } from 'react-redux'

import { useWebSettings } from '@/hooks'
import { useCartActions } from '../useCartActions'
import {
  addProduct,
  incrementedProduct,
  decrementProduct
} from '../../cartSlice'

import { Product } from '../../cartTypes'

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn()
}))

vi.mock('@/hooks', () => ({
  useWebSettings: vi.fn()
}))

describe('useCartActions', () => {
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

  it('should add product to cart', () => {
    const { result } = renderHook(() => useCartActions())

    result.current.addToCart(cartProducts[0])
    result.current.addToCart(cartProducts[1])

    expect(dispatch).toHaveBeenCalledWith(addProduct(cartProducts[0]))
    expect(dispatch).toHaveBeenCalledWith(addProduct(cartProducts[1]))
  })

  it('should increment product in cart', () => {
    const { result } = renderHook(() => useCartActions())

    result.current.incrementToCart({ itemId: '1' })
    result.current.incrementToCart({ itemId: '2' })

    expect(dispatch).toHaveBeenCalledWith(incrementedProduct({ itemId: '1' }))
    expect(dispatch).toHaveBeenCalledWith(incrementedProduct({ itemId: '2' }))

    const updatedCartProducts = cartProducts.map((product) =>
      product.itemId === '1'
        ? { ...product, quantity: product.quantity + 1 }
        : product
    )

    vi.mocked(useSelector).mockReturnValueOnce(updatedCartProducts)

    const { result: updatedResult } = renderHook(() => useCartActions())

    const updatedProduct = updatedResult.current.cartSelector.find(
      (product) => product.itemId === '1'
    )
    expect(updatedProduct?.quantity).toBe(2)
  })

  it('should decrement product in cart', () => {
    const { result } = renderHook(() => useCartActions())

    result.current.decrementToCart({ itemId: '1' })
    result.current.decrementToCart({ itemId: '2' })

    expect(dispatch).toHaveBeenCalledWith(decrementProduct({ itemId: '1' }))
    expect(dispatch).toHaveBeenCalledWith(decrementProduct({ itemId: '2' }))

    const updatedCartProducts = cartProducts.map((product) =>
      product.itemId === '2'
        ? { ...product, quantity: product.quantity - 1 }
        : product
    )

    vi.mocked(useSelector).mockReturnValueOnce(updatedCartProducts)

    const { result: updatedResult } = renderHook(() => useCartActions())

    const updatedProduct = updatedResult.current.cartSelector.find(
      (product) => product.itemId === '2'
    )
    expect(updatedProduct?.quantity).toBe(1)
  })

  it('should calculate total item per product', () => {
    const { result } = renderHook(() => useCartActions())
    const totalProductOne = result.current.totalItemPerProduct(1625701)
    expect(totalProductOne).toBe(1)

    const totalProductTwo = result.current.totalItemPerProduct(1625702)
    expect(totalProductTwo).toBe(2)
  })

  it('should calculate total items product in cart', () => {
    const { result } = renderHook(() => useCartActions())

    const totalProducts = result.current.totalItemPerProductInCart(1625701)
    expect(totalProducts).toBe(1)
  })

  it('should calculate total values in cart', () => {
    const { result } = renderHook(() => useCartActions())
    const { result: webSettingsResult } = renderHook(() => useWebSettings())

    vi.mocked(useWebSettings).mockReturnValueOnce(webSettingsResult.current)

    const total = result.current.totalValuesInCart()

    const normalizeSpaces = (str: string) => str.replace(/\u00A0/g, ' ')
    expect(normalizeSpaces(total)).toBe('R$ 50,00')
  })

  it('should calculate total items in cart', () => {
    const { result } = renderHook(() => useCartActions())

    const total = result.current.totalInCart()

    expect(total).toBe(3)
  })
})
