export interface Image {
  id: number
  image: string
}

export interface ModifierItem {
  id: number
  name: string
  price: number
  maxChoices: number
  position: number
  visible: number
  availabilityType: string
  available: boolean
  qty?: number
}

export interface Modifier {
  id: number
  name: string
  minChoices: number
  maxChoices: number
  items: ModifierItem[]
}

export interface Item {
  id: number
  name: string
  description?: string
  alcoholic: number
  price: number
  position: number
  visible?: number
  availabilityType: string
  sku?: string
  images?: Image[]
  available: boolean
  modifiers?: Modifier[]
}
