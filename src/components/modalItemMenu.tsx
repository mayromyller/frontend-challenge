import { useCartControl, useCartActions } from '@/store'

import { QuantityControlButton } from './quantityControlButton'
import { ItemProps } from './menuItemCarousel'
import { Button } from './ui/form/button'

type ModalItemMenuProps = {
  itemMenu: ItemProps
  onClick: () => void
}

export function ModalItemMenu({ itemMenu, onClick }: ModalItemMenuProps) {
  const { totalItemPerProduct } = useCartActions()
  const { handleAddProductToCart, handleIncrement, handleDecrement } =
    useCartControl(itemMenu, onClick)

  const { id, name, description, price, images } = itemMenu

  const totalInCart =
    totalItemPerProduct(id) < 1 ? price : price * totalItemPerProduct(id)

  return (
    <div className="w-[480px] flex flex-col gap-2">
      {images?.[0]?.image && (
        <div className="w-full h-[300px]">
          <img
            src={images?.[0]?.image}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      <div
        className="px-4 pb-4 flex flex-col gap-2 overflow-y-auto max-h-[200px] mt-2"
        style={{
          scrollbarWidth: 'thin'
        }}
      >
        <h3 className="text-2xl font-bold text-[#121212]">{name}</h3>
        {description && (
          <p className="text-base text-[#121212] font-light">{description}</p>
        )}
      </div>

      <div className="pb-4 pt-2 px-6 flex items-center flex-col gap-[10px]">
        <QuantityControlButton
          quantity={totalItemPerProduct(id) || 0}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <Button
          title={`Add to cart • ${totalInCart}`}
          onClick={handleAddProductToCart}
        />
      </div>
    </div>
  )
}
