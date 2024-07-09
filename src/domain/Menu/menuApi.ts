import { api } from '@/api'

import { MenuApi } from './menuTypes'

export async function getMenu() {
  const response = await api.get<MenuApi>(`/menu`)

  return response
}
