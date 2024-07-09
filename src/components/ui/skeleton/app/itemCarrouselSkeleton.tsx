export function ItemCarrouselSkeleton() {
  return (
    <div className="w-full pb-6 animate-pulse">
      <div className="w-full pt-5 md:pl-4 md:pr-3 flex flex-col">
        <div className="flex flex-row gap-2 overflow-x-auto">
          <div className="flex flex-col justify-center items-center w-[104px] max-h-[146px] relative">
            <div className="flex justify-center items-center w-[82px] h-[82px] p-[2px] rounded-full border-[2px]">
              <div className="w-full h-full rounded-full bg-gray-200"></div>
            </div>
            <div className="text-base mt-4 mb-2 h-[38px] flex items-center justify-center w-full"></div>
          </div>

          <div className="flex flex-col justify-center items-center w-[104px] max-h-[146px] relative">
            <div className="flex justify-center items-center w-[82px] h-[82px] p-[2px] rounded-full border-[2px]">
              <div className="w-full h-full rounded-full bg-gray-200"></div>
            </div>
            <div className="text-base mt-4 mb-2 h-[38px] flex items-center justify-center w-full"></div>
          </div>

          <div className="flex flex-col justify-center items-center w-[104px] max-h-[146px] relative">
            <div className="flex justify-center items-center w-[82px] h-[82px] p-[2px] rounded-full border-[2px]">
              <div className="w-full h-full rounded-full bg-gray-200"></div>
            </div>
            <div className="text-base mt-4 mb-2 h-[38px] flex items-center justify-center w-full"></div>
          </div>

          <div className="flex flex-col justify-center items-center w-[104px] max-h-[146px] relative">
            <div className="flex justify-center items-center w-[82px] h-[82px] p-[2px] rounded-full border-[2px]">
              <div className="w-full h-full rounded-full bg-gray-200"></div>
            </div>
            <div className="text-base mt-4 mb-2 h-[38px] flex items-center justify-center w-full"></div>
          </div>
        </div>
        <div className="mb-4 h-4 bg-gray-200"></div>
      </div>
    </div>
  )
}
