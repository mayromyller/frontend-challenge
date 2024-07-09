import { Item, Section } from '@/domain'
import { Accordion } from './ui/surfaces/accordion'
import { MenuItemCarousel } from './menuItemCarousel'

type SectionCarouselProps = {
  section: Section
  onClick: (item: Item) => void
}

export function SectionCarousel({ section, onClick }: SectionCarouselProps) {
  return (
    <Accordion title={section.name}>
      {section.items.map((item) => (
        <div className="py-4" key={item.id}>
          <MenuItemCarousel
            menuItem={{ ...item, itemId: item.id }}
            onClick={() => onClick(item)}
          />
        </div>
      ))}
    </Accordion>
  )
}
