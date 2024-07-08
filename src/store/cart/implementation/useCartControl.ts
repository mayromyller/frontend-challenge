import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Item, ModifierItem } from '@/domain'

import { useCartActions } from './useCartActions'

type ItemProps = Pick<
  Item,
  'id' | 'name' | 'description' | 'price' | 'images'
> & {
  modifiers?: ModifierItem
}

export function useCartControl(itemMenu: ItemProps, onClick: () => void) {
  const [controlQuantity, setControlQuantity] = useState(false)

  const { id, modifiers } = itemMenu

  const { addToCart, totalItemPerProduct, incrementToCart, decrementToCart } =
    useCartActions()
  const totalItems = totalItemPerProduct(id)

  function handleAddProductToCart(
    quantity: number,
    modifierItem?: ModifierItem | null
  ) {
    if (controlQuantity) {
      setControlQuantity(false)
      onClick()
    } else {
      addToCart({
        id,
        itemId: uuidv4(),
        name: itemMenu.name,
        price: itemMenu.price,
        modifierItem,
        quantity: quantity ?? 1
      })

      onClick()
    }
  }

  function handleIncrement(itemId: number | string) {
    if (totalItems < 1) {
      addToCart({
        id,
        itemId: uuidv4(),
        name: itemMenu.name,
        price: itemMenu.price,
        modifierItem: modifiers,
        quantity: 1
      })
      setControlQuantity(true)
    } else {
      setControlQuantity(true)
      incrementToCart({ itemId, modifierItem: modifiers })
    }
  }

  function handleDecrement(itemId: number | string) {
    if (totalItems < 1) {
      setControlQuantity(false)
    } else {
      decrementToCart({ itemId, modifierItem: modifiers })
    }
  }

  return {
    handleAddProductToCart,
    handleIncrement,
    handleDecrement
  }
}
