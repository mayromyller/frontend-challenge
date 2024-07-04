import { PropsWithChildren, useState } from 'react'

import { ArrowIcon } from 'src/components/icons/arrowIcon'

type AccordionProps = PropsWithChildren & {
  title: string
}

export function Accordion({ title, children }: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(true)

  function handleAccordionOpen() {
    setAccordionOpen(!accordionOpen)
  }

  return (
    <div className="py-2">
      <button
        onClick={handleAccordionOpen}
        className="flex justify-between w-full items-center mb-4"
      >
        <span className="color-[#121212] text-2xl font-medium">{title}</span>
        <ArrowIcon isOpen={accordionOpen} />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  )
}
