import { ButtonHTMLAttributes } from 'react'

import { useWebSettings } from '@/hooks'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isFullWidth?: boolean
  title: string
}

export function Button({
  isFullWidth = true,
  title,
  ...buttonProps
}: ButtonProps) {
  const { webSettings } = useWebSettings()
  const bgColor = webSettings.primaryColour

  return (
    <button
      className={`${
        isFullWidth ? 'w-full' : ''
      } bg-primary text-white font-bold py-2 px-4 rounded-full h-12`}
      style={{
        backgroundColor: bgColor
      }}
      {...buttonProps}
    >
      {title}
    </button>
  )
}
