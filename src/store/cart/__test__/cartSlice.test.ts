import { describe, it, expect } from 'vitest'

import cartReducer, {
  addProduct,
  incrementedProduct,
  decrementProduct,
  removeProduct
} from '../cartSlice'

import { CartState, Product } from '../cartTypes'

const initialState: CartState = {
  products: []
}

const initialStateWithOneProduct: CartState = {
  products: [
    {
      id: 1,
      itemId: '1',
      name: 'Product 1',
      quantity: 1,
      price: 10
    }
  ]
}

describe('cartSlice', () => {
  it('should handle addProduct', () => {
    const product: Product = {
      id: 1,
      itemId: '1',
      name: 'Product 1',
      quantity: 1,
      price: 10
    }

    const action = addProduct(product)
    const state = cartReducer(initialState, action)

    expect(state.products).toHaveLength(1)
    expect(state.products[0]).toEqual(product)
  })

  it('should handle incrementedProduct', () => {
    const action = incrementedProduct({ itemId: '1' })
    const state = cartReducer(initialStateWithOneProduct, action)

    expect(state.products[0].quantity).toBe(2)
  })

  it('should handle decrementProduct', () => {
    const initialStateWithProduct: CartState = {
      products: [
        { id: 1, itemId: '1', name: 'Product 1', quantity: 2, price: 10 }
      ]
    }

    const action = decrementProduct({ itemId: '1' })
    const state = cartReducer(initialStateWithProduct, action)

    expect(state.products[0].quantity).toBe(1)
  })

  it('should handle removeProduct', () => {
    const action = removeProduct({ itemId: '1' })

    const state = cartReducer(initialStateWithOneProduct, action)
    expect(state.products).toHaveLength(0)
  })
})
