import { useState } from 'react'

import { Item } from '@/domain'

import { useCartActions } from './useCartActions'

type ItemProps = Pick<Item, 'id' | 'name' | 'description' | 'price' | 'images'>

export function useCartControl(itemMenu: ItemProps, onClick: () => void) {
  const [controlQuantity, setControlQuantity] = useState(false)

  const { id } = itemMenu

  const { addToCart, totalItemPerProduct, incrementToCart, decrementToCart } =
    useCartActions()
  const totalItems = totalItemPerProduct(id)

  function handleAddProductToCart() {
    if (controlQuantity) {
      setControlQuantity(false)
      onClick()
    } else {
      addToCart({
        ...itemMenu,
        quantity: 1
      })
      onClick()
    }
  }

  function handleIncrement() {
    if (totalItems < 1) {
      addToCart({
        ...itemMenu,
        quantity: 1
      })
    } else {
      setControlQuantity(true)
      incrementToCart(id)
    }
  }

  function handleDecrement() {
    if (totalItems < 1) {
      setControlQuantity(false)
    } else {
      decrementToCart(id)
    }
  }

  return {
    handleAddProductToCart,
    handleIncrement,
    handleDecrement
  }
}
