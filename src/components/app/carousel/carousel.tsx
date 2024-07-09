import { useActiveTab } from '@/store'
import { MenuApi } from '@/domain'

import { Modal } from '../../ui/utils/modal'
import { Tabs, Tab } from '../../ui/layout/tabs'
import { ModalItemMenu } from '../../modalItemMenu'
import { SectionCarousel } from '../../sectionCarousel'
import { useCarouselPresenter } from './carouselPresenter'
import { NoDataCarousel } from 'src/components/feedback/noDataCarousel'

type Data = {
  data: MenuApi | undefined
  searchTerm?: string
}

export function Carousel({ data, searchTerm }: Data) {
  const {
    dataDisplay,
    productSelected,
    open,
    handleOpenModal,
    handleCloseModal
  } = useCarouselPresenter({ data, searchTerm })
  const { activeTab } = useActiveTab()

  if (!data) {
    return <NoDataCarousel />
  }

  return (
    <div className="w-full pb-6">
      {data && (
        <Tabs>
          {data.sections.map((section) => (
            <Tab
              key={section.id}
              label={section.name}
              image={section.images[0].image}
            >
              {dataDisplay &&
                dataDisplay.map((section) => (
                  <SectionCarousel
                    key={section.id}
                    section={section}
                    onClick={handleOpenModal}
                  />
                ))}
            </Tab>
          ))}
        </Tabs>
      )}

      {!data?.sections.some((section) => section.name === activeTab) && (
        <div className="w-full md:pl-4 md:pr-3 flex flex-col">
          {dataDisplay &&
            dataDisplay.map((section) => (
              <div className="py-2" key={section.id}>
                <SectionCarousel
                  key={section.id}
                  section={section}
                  onClick={handleOpenModal}
                />
              </div>
            ))}
        </div>
      )}

      {productSelected && (
        <Modal open={open} onClose={handleCloseModal}>
          <ModalItemMenu
            itemMenu={{
              ...productSelected,
              itemId: productSelected.id
            }}
            onClick={handleCloseModal}
            modifiers={productSelected.modifiers}
          />
        </Modal>
      )}
    </div>
  )
}
