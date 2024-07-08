import { ModifierItem } from '@/domain'

export interface Product {
  id: number | string
  itemId: number | string
  name: string
  price: number
  quantity: number
  modifierItem?: ModifierItem | null
}

export interface CartState {
  products: Product[]
}
