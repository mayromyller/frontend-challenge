type MenuIconProps = {
  size?: number | string
  color?: string
}

export function MenuIcon({ size = 28, color = 'white' }: MenuIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={size} height="2" rx="1" fill={color} />
      <rect y="7" width={size} height="2" rx="1" fill={color} />
      <rect y="14" width={size} height="2" rx="1" fill={color} />
    </svg>
  )
}
