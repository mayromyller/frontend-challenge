import React, { useState } from 'react'

import { useActiveTab } from '@/store'
import { useWebSettings } from '@/hooks'

type TabsProps = {
  children: Array<React.ReactElement>
}

function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const { setTab, removeTab } = useActiveTab()

  const { webSettings } = useWebSettings()
  const primaryColour = webSettings.primaryColour

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) {
    e.preventDefault()
    if (newActiveTab !== activeTab) {
      setTab(newActiveTab)
      setActiveTab(newActiveTab)
    } else {
      removeTab()
      setActiveTab(null)
    }
  }

  return (
    <div className="w-full pt-5  md:pl-4 md:pr-3 flex flex-col">
      <div className="flex flex-row gap-2 overflow-x-auto">
        {children.map((child) => (
          <button
            key={child.props.label}
            onClick={(e) => handleClick(e, child.props.label)}
            className="flex flex-col justify-center items-center w-[104px] max-h-[146px] relative"
          >
            <div
              className="flex justify-center items-center w-[82px] h-[82px] p-[2px] rounded-full border-[2px]"
              style={{
                borderColor:
                  activeTab === child.props.label ? primaryColour : 'white'
              }}
            >
              <img
                src={child.props.image}
                alt=""
                className="w-full h-full rounded-full object-cover object-center"
              />
            </div>
            <span
              className="text-base mt-4 mb-2 h-[38px] flex items-center justify-center w-full"
              style={{
                fontWeight: activeTab === child.props.label ? 'bold' : 'normal'
              }}
            >
              {child.props.label}
            </span>

            <div
              style={{
                backgroundColor:
                  activeTab === child.props.label ? primaryColour : '',
                height: '2px',
                width: 'calc(100% - 8px)'
              }}
              className="absolute bottom-0 left-0 right-0 mx-auto"
            />
          </button>
        ))}
      </div>

      <div
        style={{
          paddingTop: activeTab ? '1rem' : '0',
          paddingBottom: activeTab ? '1rem' : '0'
        }}
        className="mb-4"
      >
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>
          }
          return null
        })}
      </div>
    </div>
  )
}

type TabProps = {
  label: string
  image: string
  children: React.ReactNode
}

function Tab({ children, label }: TabProps) {
  return (
    <div aria-label={label} className="hidden">
      {children}
    </div>
  )
}

export { Tabs, Tab }
