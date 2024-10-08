import { useEffect, useState } from 'react'
import { getMenu } from '../menuApi'
import { MenuApi } from '../menuTypes'
import { AxiosError } from 'axios'

/* Adding code so that if an API call fails with CORS problems, a mock of the data is added */
// import fakeData from '../../../components/data'

export function useGetMenu() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<MenuApi>()

  async function fetchData() {
    try {
      setIsLoading(true)
      const response = await getMenu()
      console.log("🚀 ~ fetchData ~ response:", response)

      setData(response.data)
    } catch (error) {
      if (error instanceof AxiosError) {
        /* Adding code so that if an API call fails with CORS problems, a mock of the data is added */
        // setData(fakeData as MenuApi)
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
