import { PropsWithChildren } from 'react'

export function BoxCard({ children }: PropsWithChildren) {
  return (
    <div className="min-[900px]:[box-shadow:0px_2px_14px_0px_rgba(0,0,0,0.2)] w-full">
      {children}
    </div>
  )
}
