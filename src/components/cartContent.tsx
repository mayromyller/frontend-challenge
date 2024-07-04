import { useCartActions } from '@/store'
import { BoxCard } from './ui/layout/boxCard'
import { QuantityControlButton } from './quantityControlButton'

export function CartContent() {
  const {
    // totalValuesInCart,
    cartSelector,
    decrementToCart,
    incrementToCart,
    totalItemPerProduct
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
              <div key={item.id}>
                <div className="flex flex-row item-center justify-between">
                  <p className="text-base ">{item.name}</p>
                  <p className="text-base font-medium ">
                    {item.price * totalItemPerProduct(item.id)}
                  </p>
                </div>
                <QuantityControlButton
                  size="small"
                  quantity={item.quantity}
                  onDecrement={() => decrementToCart(item.id)}
                  onIncrement={() => incrementToCart(item.id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </BoxCard>
  )
}
