import { useWebSettings } from '@/hooks'

type ArrowIconProps = {
  isOpen?: boolean
}

export function ArrowIcon({ isOpen }: ArrowIconProps) {
  const { webSettings } = useWebSettings()

  const primaryColour = webSettings.primaryColour

  return (
    <svg
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rotate-0 shrink-0 ${isOpen && 'rotate-180'}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5857 0.292891C15.9763 -0.0976334 16.6094 -0.0976326 17 0.292892V0.292892C17.3905 0.683416 17.3905 1.31658 17 1.70711L9.70706 9C9.31653 9.39052 8.68337 9.39052 8.29285 9L0.999953 1.7071C0.609428 1.31658 0.609429 0.683416 0.999953 0.292892V0.292892C1.39048 -0.0976326 2.02364 -0.0976326 2.41417 0.292892L8.29285 6.17157C8.68337 6.5621 9.31654 6.5621 9.70706 6.17157L15.5857 0.292891Z"
        fill={primaryColour}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.4142 9C2.02367 9.39053 1.39051 9.39053 0.999985 9C0.609461 8.60948 0.609461 7.97631 0.999987 7.58579L8.29288 0.292892C8.6834 -0.0976315 9.31657 -0.0976305 9.70709 0.292893L17 7.58579C17.3905 7.97631 17.3905 8.60948 17 9C16.6095 9.39053 15.9763 9.39053 15.5858 9L9.70709 3.12132C9.31657 2.7308 8.6834 2.7308 8.29288 3.12132L2.4142 9Z"
      />
    </svg>
  )
}
