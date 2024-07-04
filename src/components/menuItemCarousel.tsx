import { Item } from '@/domain'

export type ItemProps = Pick<Item, 'id' | 'name' | 'description' | 'price' | 'images'>

type MenuItemCarouselProps = {
  menuItem: ItemProps
  onClick: () => void
}

export function MenuItemCarousel({ menuItem, onClick }: MenuItemCarouselProps) {
  const { name, description, price, images } = menuItem

  return (
    <>
      <button
        className="flex w-full flex-row items-start justify-between gap-4 text-start"
        onClick={onClick}
      >
        <div>
          <h3 className="text-base font-medium text-[#121212]">{name}</h3>
          <p className="text-base text-[#464646] text-ellipsis line-clamp-2 md:line-clamp-1 font-light">
            {description}
          </p>
          <p className="text-base font-medium mt-1 text-[#464646]">{price}</p>
        </div>

        {images?.[0]?.image && (
          <img className="w-[128px] h-[85px] rounded-[4px]" src={images?.[0]?.image} alt={name} />
        )}
      </button>
    </>
  )
}
