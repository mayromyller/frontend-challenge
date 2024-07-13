import { useEffect, useState } from 'react'
import { getMenu } from '../menuApi'
import { MenuApi } from '../menuTypes'
import { AxiosError } from 'axios'

import fakeData from '../../../components/data'

export function useGetMenu() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<MenuApi>()

  async function fetchData() {
    try {
      setIsLoading(true)
      const response = await getMenu()

      setData(response.data)
    } catch (error) {
      if (error instanceof AxiosError) {
        setData(fakeData as MenuApi)
      }
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
