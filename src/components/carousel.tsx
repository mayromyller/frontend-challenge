import { useEffect, useState } from 'react'

import { useActiveTab } from '@/store'

import { Item } from '@/domain'

import { Tabs, Tab } from './ui/layout/tabs'
import { Accordion } from './ui/surfaces/accordion'
import { MenuItemCarousel } from './menuItemCarousel'
import { ModalItemMenu } from './modalItemMenu'
import { Modal } from './ui/utils/modal'

import data from './data'

export function Carousel() {
  const [productSelected, setProductSelected] = useState<Item | null>(null)
  const [dataDisplay, setDataDisplay] = useState<Array<any>>([])
  const [open, setOpen] = useState(false)

  function handleCloseModal() {
    setOpen(false)
    document.body.classList.add('modal-visible')
  }

  function handleOpenModal() {
    setOpen(true)
    document.body.classList.remove('modal-visible')
  }

  const { activeTab } = useActiveTab()

  function filterData() {
    if (activeTab) {
      const newData = data.sections.filter(
        (section) => section.name === activeTab
      )

      setDataDisplay(newData)
    } else {
      setDataDisplay(data.sections)
    }
  }

  function renderModalItemMenu(item: Item) {
    handleOpenModal()

    setProductSelected(item)
  }

  useEffect(() => {
    filterData()
  }, [data, activeTab])

  return (
    <div className="w-full pb-6">
      <Tabs>
        {data.sections.map((section) => (
          <Tab
            key={section.id}
            label={section.name}
            image={section.images[0].image}
          >
            {dataDisplay.map((section) => (
              <Accordion key={section.id} title={section.name}>
                {section.items.map((item: Item) => (
                  <div className="py-4" key={item.id}>
                    <MenuItemCarousel
                      menuItem={item}
                      onClick={() => renderModalItemMenu(item)}
                    />
                  </div>
                ))}
              </Accordion>
            ))}
          </Tab>
        ))}
      </Tabs>

      {!activeTab && (
        <div className="w-full md:pl-4 md:pr-3 flex flex-col">
          {data.sections.map((section) => (
            <div className="py-2" key={section.id}>
              <Accordion key={section.id} title={section.name}>
                {section.items.map((item: Item) => (
                  <div className="py-4" key={item.id}>
                    <MenuItemCarousel
                      menuItem={item}
                      onClick={() => renderModalItemMenu(item)}
                    />
                  </div>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      )}

      {productSelected && (
        <Modal open={open} onClose={handleCloseModal}>
          <ModalItemMenu
            itemMenu={productSelected}
            onClick={handleCloseModal}
          />
        </Modal>
      )}
    </div>
  )
}
