import { Item } from '@/domain'
import { useWebSettings } from '@/hooks'
import { useCartActions } from '@/store'

export type ItemProps = Pick<
  Item,
  'id' | 'name' | 'description' | 'price' | 'images'
> & {
  itemId: number | string
}

type MenuItemCarouselProps = {
  menuItem: ItemProps
  onClick: () => void
}

export function MenuItemCarousel({ menuItem, onClick }: MenuItemCarouselProps) {
  const { name, description, price, images, id } = menuItem
  const { webSettings } = useWebSettings()
  const color = webSettings.primaryColour

  const { totalItemPerProduct } = useCartActions()
  const total = totalItemPerProduct(id)
  const renderTotal = total >= 1 ? total : ''

  return (
    <>
      <button
        className="flex w-full flex-row items-start justify-between gap-4 text-start"
        onClick={onClick}
      >
        <div>
          <div className="flex flex-row items-center gap-2">
            {total > 0 && (
              <span
                className="text-white py-[1px] px-[5px] rounded-[4px] inline-flex items-center justify-center"
                style={{
                  backgroundColor: color
                }}
              >
                {renderTotal}
              </span>
            )}
            <h3 className="text-base font-medium text-[#121212]"> {name}</h3>
          </div>
          <p className="text-base text-[#464646] text-ellipsis line-clamp-2 md:line-clamp-1 font-light">
            {description}
          </p>
          <p className="text-base font-medium mt-1 text-[#464646]">{price}</p>
        </div>

        {images?.[0]?.image && (
          <img
            className="w-[128px] h-[85px] rounded-[4px]"
            src={images?.[0]?.image}
            alt={name}
          />
        )}
      </button>
    </>
  )
}
