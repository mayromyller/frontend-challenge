import { BoxCard, Carousel, CartContent, Header } from '@/components'
import { SearchInput } from './components/ui/form/searchInput'

export function App() {
  return (
    <>
      <Header />

      <div className="h-[3px] w-full bg-white" />

      <main className="w-full bg-white md:bg-[#EEEEEE] min-h-screen pb-[35px]">
        <div className="max-w-[1024px] mx-auto py-[6px] px-[16px] lg:px-0">
          <SearchInput />
        </div>

        <div className="max-w-[1024px] lg:mx-auto md:bg-[#F8F9FA] bg-white md:px-[40px] px-[16px] md:py-8 py-5">
          <div className="flex md:flex-row flex-col gap-6 items-start">
            <BoxCard>
              <div className="md:max-w-[600px] md:w-[600px] w-full">
                <Carousel />
              </div>
            </BoxCard>

            <CartContent />
          </div>
        </div>
      </main>
    </>
  )
}
