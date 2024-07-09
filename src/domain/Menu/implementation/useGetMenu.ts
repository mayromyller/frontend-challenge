import { useEffect, useState } from 'react'
import { getMenu } from '../menuApi'
import { MenuApi } from '../menuTypes'

export function useGetMenu() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<MenuApi>()

  async function fetchData() {
    try {
      setIsLoading(true)
      const response = await getMenu()

      setData(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    data,
    isLoading
  }
}
