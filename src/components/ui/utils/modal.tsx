import { useEffect } from 'react'

import { XIcon } from '../../icons/xIcon'

type ModalProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.classList.add('modal-visible')
    } else {
      document.body.classList.remove('modal-visible')
    }
  }, [open])

  return (
    <div
      className={`fixed z-50 w-full inset-0 flex justify-center items-center transition-colors ${
        open ? 'visible bg-black/60' : 'invisible'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white transition-all ${
          open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 h-7 w-7 py-1 px-2 border border-neutral-200 rounded-full bg-white flex items-center justify-center"
          onClick={onClose}
        >
          <XIcon />
        </button>
        {children}
      </div>
    </div>
  )
}
