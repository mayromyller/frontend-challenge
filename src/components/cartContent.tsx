import { CSSProperties } from 'react'

import { useCartActions } from '@/store'
import { useModalVisibility, useWindowResize } from '@/hooks'

import { QuantityControlButton } from './quantityControlButton'
import { ShowCartButton } from './app/showCartButton'
import { BoxCard } from './ui/layout/boxCard'
import { XIcon } from './icons/xIcon'
import { currencyFormat } from '@/utils'

type CartContentProps = {
  visibility: boolean
  onClick: () => void
}

export function CartContent({ visibility, onClick }: CartContentProps) {
  const {
    cartSelector,
    decrementToCart,
    incrementToCart,
    totalValuesInCart,
    totalItemPerProductInCart
  } = useCartActions()
  const { windowSize } = useWindowResize()
  useModalVisibility(visibility)

  const total = cartSelector.length

  const styleToHideContainer: CSSProperties =
    visibility && windowSize
      ? {
          height: 'calc(100dvh)',
          width: '100vw',
          display: 'flex',
          position: 'fixed',
          background: 'white',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          scrollbarWidth: 'thin'
        }
      : {}
  const styleToHideFooter: CSSProperties = visibility ? { display: 'flex' } : {}

  return (
    <BoxCard>
      <div
        className="hidden min-[900px]:flex flex-col overflow-y-auto max-[900px]:pb-20"
        style={styleToHideContainer}
      >
        <div>
          <div className="py-[18px] px-6 bg-[#F8F9FA] max-[900px]:flex relative">
            <h4 className="font-medium text-2xl max-[900px]:text-lg max-[900px]:text-center max-[899px]:w-full">
              Carrinho
            </h4>
            <button
              className="hidden h-7 w-7 py-1 px-2 bg-transparent max-[899px]:flex items-center justify-center justify-self-end"
              onClick={onClick}
            >
              <XIcon />
            </button>
          </div>

          {total < 1 ? (
            <div className="p-6 bg-white">
              <p className="text-base">Seu carrinho está vazio</p>
            </div>
          ) : (
            <div
              className="p-6 bg-white"
              style={{
                scrollbarWidth: 'thin'
              }}
            >
              {cartSelector.map((item) => (
                <div key={item.itemId} className="mb-2">
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
                        ? currencyFormat(
                            item.price * totalItemPerProductInCart(item.id) +
                              item.modifierItem?.price * item.quantity
                          )
                        : currencyFormat(item.price * item.quantity)}
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
                    canDecrease={true}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {total >= 1 && (
          <div
            className="min-[900px]:flex hidden flex-col"
            style={styleToHideFooter}
          >
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
          </div>
        )}

        <ShowCartButton label={'Checkout now'} onClick={onClick} />
      </div>
    </BoxCard>
  )
}
