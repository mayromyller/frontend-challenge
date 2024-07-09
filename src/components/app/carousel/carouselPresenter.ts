import { useEffect, useState } from 'react'

import { Item, MenuApi, Section } from '@/domain'
import { useActiveTab } from '@/store'

interface CarouselPresenter {
  data: MenuApi | undefined
  searchTerm?: string
}

export function useCarouselPresenter({ data, searchTerm }: CarouselPresenter) {
  const [productSelected, setProductSelected] = useState<Item | null>(null)
  const [dataDisplay, setDataDisplay] = useState<Section[] | undefined>([])
  const [open, setOpen] = useState(false)

  const { activeTab } = useActiveTab()

  function handleOpenModal(item: Item) {
    setProductSelected(item)
    setOpen(true)
    document.body.classList.add('modal-visible')
  }

  function handleCloseModal() {
    setOpen(false)
    document.body.classList.remove('modal-visible')
  }

  function filterData() {
    if (data) {
      let newData
      if (activeTab) {
        newData = data.sections.filter((section) => section.name === activeTab)
      } else {
        newData = data.sections
      }

      if (searchTerm) {
        newData = newData
          .map((section) => {
            const filteredItems = section.items.filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            return { ...section, items: filteredItems }
          })
          .filter((section) => section.items.length > 0)
      }

      setDataDisplay(newData)
    } else {
      setDataDisplay(undefined)
    }
  }

  useEffect(() => {
    filterData()
  }, [data, activeTab, searchTerm])

  return {
    dataDisplay,
    productSelected,
    open,
    handleOpenModal,
    handleCloseModal
  }
}
