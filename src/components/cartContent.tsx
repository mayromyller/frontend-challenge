import { useCartActions } from '@/store'
import { BoxCard } from './ui/layout/boxCard'
import { QuantityControlButton } from './quantityControlButton'

export function CartContent() {
  const {
    totalValuesInCart,
    cartSelector,
    decrementToCart,
    incrementToCart,
    totalItemPerProductInCart
  } = useCartActions()

  const total = cartSelector.length

  return (
    <BoxCard>
      <div className="hidden md:flex w-full flex-col">
        <div className="py-[22px] px-6 bg-[#F8F9FA]">
          <h4 className="font-medium text-2xl">Carrinho</h4>
        </div>

        {total < 1 ? (
          <div className="p-6 bg-white">
            <p className="text-base">Seu carrinho está vazio</p>
          </div>
        ) : (
          <div className="p-6 bg-white">
            {cartSelector.map((item) => (
              <div key={item.id} className="mb-2">
                <div className="flex flex-row item-center justify-between">
                  <div>
                    <p className="text-base ">{item.name}</p>
                    {item.modifierItem &&
                      Object.keys(item.modifierItem).length > 0 && (
                        <p className="text-base text-[#5F5F5F]">{`Com ${item.modifierItem.name}`}</p>
                      )}
                  </div>

                  <p className="text-base font-medium ">
                    {item.modifierItem &&
                    Object.keys(item.modifierItem).length > 0
                      ? Number(
                          item.price * totalItemPerProductInCart(item.id) +
                            item.modifierItem?.price * item.quantity
                        ).toFixed(2)
                      : Number(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <QuantityControlButton
                  size="small"
                  quantity={item.quantity}
                  onDecrement={() =>
                    decrementToCart({
                      itemId: item.itemId,
                      modifierItem: item.modifierItem
                    })
                  }
                  onIncrement={() =>
                    incrementToCart({
                      itemId: item.itemId,
                      modifierItem: item.modifierItem
                    })
                  }
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {total >= 1 && (
        <>
          <div className="bg-[#F8F9FA] px-4 py-4 border-t-[1px] border-[#EEEEEE] flex flex-row items-center justify-between">
            <p className="text-base text-[#121212]">Sub total</p>
            <p className="text-base font-medium text-[#121212]">
              {totalValuesInCart()}
            </p>
          </div>
          <div className="bg-[#F8F9FA] px-4 py-4 border-t-[1px] border-[#DADADA] flex flex-row items-center justify-between">
            <p className="text-2xl text-[#121212] ">Total: </p>
            <p className="text-2xl font-medium text-[#121212]">
              {totalValuesInCart()}
            </p>
          </div>
        </>
      )}
    </BoxCard>
  )
}
