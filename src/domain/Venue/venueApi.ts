import { api } from '@/api'

import { VenueApi } from './venueTypes'

export async function getVenue(id: number) {
  const response = await api.get<VenueApi>(`/venue/${id}`)

  return response
}
