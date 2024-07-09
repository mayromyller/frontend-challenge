import { useState } from 'react'

import {
  BoxCard,
  Carousel,
  CartContent,
  Header,
  ItemCarrouselSkeleton,
  SearchInput,
  ShowCartButton,
  ItemMenuCarrouselSkeleton,
  CartSkeleton
} from '@/components'

import { useWebSettings } from '@/hooks'
import { useGetMenu } from '@/domain'

export function App() {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const { webSettings } = useWebSettings()
  const primaryColor = webSettings.primaryColour

  const { data, isLoading } = useGetMenu()

  function handleShowCart() {
    setIsCartVisible(true)
  }
  function handleHideCart() {
    setIsCartVisible(false)
  }

  function handleSearch(term: string) {
    setSearchTerm(term)
  }

  return (
    <>
      <Header />

      <div className="h-[3px] w-full bg-white" />

      <main className="w-full bg-white md:bg-[#EEEEEE] min-h-[calc(100dvh)] pb-[80px] relative">
        <div className="max-w-[1024px] mx-auto py-[6px] px-[16px] lg:px-0">
          <SearchInput onSearch={handleSearch} />
        </div>

        <div className="max-w-[1024px] lg:mx-auto md:bg-[#F8F9FA] bg-white md:px-[40px] px-[16px] md:py-8 py-5">
          <div className="flex min-[900px]:flex-row flex-col gap-6 items-start">
            <BoxCard>
              <div className="min-[900px]:max-w-[600px] min-[900px]:w-[600px] w-full">
                {isLoading ? (
                  <>
                    <ItemCarrouselSkeleton />
                    <ItemMenuCarrouselSkeleton />
                  </>
                ) : (
                  <Carousel data={data} searchTerm={searchTerm} />
                )}
              </div>
            </BoxCard>

            {isLoading ? (
              <BoxCard>
                <CartSkeleton />
              </BoxCard>
            ) : (
              <CartContent
                visibility={isCartVisible}
                onClick={handleHideCart}
              />
            )}
          </div>
        </div>

        <div className="min-[900px]:hidden w-full flex justify-center items-center p-6 border-t-[1px] border-b-[1px] border-solid border-[#EEEEEE] bg-[#F8F9FA]">
          <a
            className="text-base font-bold underline cursor-pointer"
            style={{
              color: primaryColor
            }}
          >
            View allergy information
          </a>
        </div>

        <ShowCartButton onClick={handleShowCart} />
      </main>
    </>
  )
}
