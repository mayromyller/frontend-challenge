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

  const { disabled } = buttonProps

  return (
    <button
      className={`${
        isFullWidth ? 'w-full' : ''
      } bg-primary text-white font-bold py-2 px-4 rounded-full h-12 disabled:bg-[#DADADA] disabled:text-[#5F5F5F] disabled:cursor-not-allowed`}
      style={{
        backgroundColor: disabled ? '' : bgColor
      }}
      {...buttonProps}
    >
      {title}
    </button>
  )
}
