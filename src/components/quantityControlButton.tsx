import { useWebSettings } from '@/hooks'

type QuantityControlButtonProps = {
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
  size?: 'small' | 'large'
  canDecrease?: boolean
}

export function QuantityControlButton({
  quantity,
  onIncrement,
  onDecrement,
  size = 'large',
  canDecrease = false
}: QuantityControlButtonProps) {
  const { webSettings } = useWebSettings()
  const bgColor = webSettings.primaryColour

  const isDisabled = quantity < (canDecrease ? 1 : 2)

  return (
    <div className="flex flex-row items-center">
      <button
        className={`
    font-bold rounded-full flex items-center justify-center
    ${size === 'large' ? 'h-8 w-8' : 'h-5 w-5'}
  `}
        style={{
          backgroundColor: isDisabled ? '#DADADA' : bgColor,
          cursor: isDisabled ? 'not-allowed' : 'pointer'
        }}
        onClick={onDecrement}
        disabled={isDisabled}
      >
        {size === 'small' ? (
          <svg
            width="12"
            height="4"
            viewBox="0 0 12 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.5"
              width="12"
              height="3"
              rx="1.5"
              fill={isDisabled ? '#5F5F5F' : 'white'}
            />
          </svg>
        ) : (
          <svg
            width="19"
            height="4"
            viewBox="0 0 19 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.455078"
              width="18"
              height="3"
              rx="1.5"
              fill={isDisabled ? '#5F5F5F' : 'white'}
            />
          </svg>
        )}
      </button>

      <p className="text-lg font-bold px-4">{quantity}</p>
      <button
        className={`
          font-bold rounded-full  flex items-center justify-center
          ${size === 'large' ? 'h-8 w-8' : 'h-5 w-5'}
          `}
        style={{
          backgroundColor: bgColor
        }}
        onClick={onIncrement}
      >
        {size === 'small' ? (
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-[1px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8891 7.14276L7.14292 7.14286V10.8541C7.14292 11.4826 6.62864 11.9969 6.00007 11.9969C5.3715 11.9969 4.85721 11.4826 4.85721 10.8541V7.14286H1.1453C0.516727 7.14286 0.00244141 6.62858 0.00244141 6C0.00244141 5.37143 0.516727 4.85715 1.1453 4.85715H4.85721V1.15558C4.85721 0.527012 5.3715 0.0127258 6.00007 0.0127258C6.62864 0.0127258 7.14292 0.527012 7.14292 1.15558V4.85715L10.8891 4.85705C11.5177 4.85705 12.032 5.37133 12.032 5.9999C12.032 6.62848 11.5177 7.14276 10.8891 7.14276Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 16.5C8 17.3284 8.67157 18 9.5 18C10.3284 18 11 17.3284 11 16.5V10.5H17C17.8284 10.5 18.5 9.82843 18.5 9C18.5 8.17157 17.8284 7.5 17 7.5H11V1.5C11 0.671573 10.3284 0 9.5 0C8.67157 0 8 0.671573 8 1.5V7.5H2C1.17157 7.5 0.5 8.17157 0.5 9C0.5 9.82843 1.17157 10.5 2 10.5H8V16.5Z"
              fill="white"
            />
          </svg>
        )}
      </button>
    </div>
  )
}
