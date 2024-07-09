import { useEffect } from 'react'

export function useModalVisibility(visibility: boolean) {
  useEffect(() => {
    if (visibility) {
      document.body.classList.add('modal-visible')
    } else {
      document.body.classList.remove('modal-visible')
    }
  }, [visibility])
}
