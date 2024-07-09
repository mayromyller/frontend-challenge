import { useEffect, useState } from 'react'

export function useWindowResize() {
  const [windowSize, setWindowSize] = useState(false)

  useEffect(() => {
    function handleResize() {
      const isMobile: boolean = window.innerWidth < 900

      if (isMobile) {
        setWindowSize(isMobile)
      } else {
        setWindowSize(false)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { windowSize }
}
