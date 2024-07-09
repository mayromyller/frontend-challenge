import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../store'

import { Product } from '../cartTypes'

import {
  addProduct,
  incrementedProduct,
  decrementProduct,
  removeProduct
} from '../cartSlice'
import { ModifierItem } from '@/domain'
import { currencyFormat } from '@/utils'

export function useCartActions() {
  const dispatch: AppDispatch = useDispatch()
  const cartSelector = useSelector((state: RootState) => state.cart.products)

  function addToCart(product: Product) {
    dispatch(addProduct(product))
  }

  function incrementToCart(product: {
    itemId: number | string
    modifierItem?: ModifierItem | null
  }) {
    dispatch(incrementedProduct(product))
  }

  function decrementToCart(product: {
    itemId: number | string
    modifierItem?: ModifierItem | null
  }) {
    dispatch(decrementProduct(product))
  }

  function removeFromCart(product: number) {
    dispatch(removeProduct(product))
  }

  function totalItemPerProduct(productId: number | string) {
    const product = cartSelector.find((item) => item.id === productId)

    if (product) {
      const total = cartSelector.reduce(
        (acc, item) => (item.id === productId ? acc + item.quantity : acc),
        0
      )
      return total
    }

    return 0
  }

  function totalItemPerProductInCart(productId: number | string) {
    const product = cartSelector.find((item) => item.id === productId)

    if (product) {
      return product.quantity
    }

    return 0
  }

  function totalValuesInCart(): string {
    const result = cartSelector.reduce(
      (acc, item) =>
        acc + (item.price + (item.modifierItem?.price ?? 0)) * item.quantity,
      0
    )

    return currencyFormat(result)
  }

  function totalInCart(): string {
    const result = cartSelector.reduce((acc, item) => acc + item.quantity, 0)
    return currencyFormat(result)
  }

  return {
    addToCart,
    incrementToCart,
    decrementToCart,
    removeFromCart,
    cartSelector,
    totalItemPerProduct,
    totalItemPerProductInCart,
    totalValuesInCart,
    totalInCart
  }
}
