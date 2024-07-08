import { useCartControl } from '@/store'

import { QuantityControlButton } from './quantityControlButton'
import { ItemProps } from './menuItemCarousel'
import { Button } from './ui/form/button'
import { Modifier, ModifierItem } from '@/domain'
import { RadioButton } from './ui/form/radioButton'
import { useState } from 'react'

type ModalItemMenuProps = {
  itemMenu: ItemProps
  modifiers?: Modifier[]
  onClick: () => void
}

export function ModalItemMenu({
  itemMenu,
  modifiers,
  onClick
}: ModalItemMenuProps) {
  const [selectedModifier, setSelectedModifier] = useState<
    ModifierItem | undefined
  >({} as ModifierItem)
  const [quantity, setQuantity] = useState(1)
  const { handleAddProductToCart } = useCartControl(itemMenu, onClick)

  const { name, description, price, images } = itemMenu

  const totalInCart = price * quantity

  function handleSelectedModifier(item: ModifierItem) {
    setSelectedModifier(item)
  }

  function handleAddProduct() {
    handleAddProductToCart(quantity, selectedModifier)
    setSelectedModifier(undefined)
    setQuantity(1)
  }

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
        className=" pb-4 flex flex-col gap-2 overflow-y-auto max-h-[200px] mt-2"
        style={{
          scrollbarWidth: 'thin'
        }}
      >
        <div className="px-4">
          <h3 className="text-2xl font-bold text-[#121212]">{name}</h3>
          {description && (
            <p className="text-base text-[#121212] font-light">{description}</p>
          )}
        </div>
        {modifiers && (
          <>
            {modifiers.map((modifier) => (
              <div key={modifier.id}>
                <div className="bg-[#F8F9FA] p-4 items-center">
                  <h3 className="text-[#464646] font-bold">{modifier.name}</h3>
                  <span className="text-[#5F5F5F]">
                    Select {modifier.maxChoices} option
                    {modifier.maxChoices > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="px-4">
                  {modifier.items.map((item) => (
                    <div key={item.id}>
                      <RadioButton
                        label={item.name}
                        name={`${item.id}`}
                        value={item}
                        valueSelected={selectedModifier}
                        onChange={() => handleSelectedModifier(item)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="pb-4 pt-2 px-6 flex items-center flex-col gap-[10px]">
        <QuantityControlButton
          quantity={quantity}
          onIncrement={() => setQuantity(quantity + 1)}
          onDecrement={() => setQuantity(quantity - 1)}
        />
        <Button
          title={`Add to cart • ${Number(totalInCart).toFixed(2)}`}
          onClick={handleAddProduct}
          // disabled={totalInCart <= 0}
        />
      </div>
    </div>
  )
}
