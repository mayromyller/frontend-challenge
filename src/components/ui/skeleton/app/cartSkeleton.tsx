export function CartSkeleton() {
  return (
    <div className="hidden min-[900px]:flex flex-col overflow-y-auto max-[900px]:pb-20 animate-pulse">
      <div>
        <div className="py-[18px] px-6 bg-[#F8F9FA] max-[900px]:flex relative">
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="hidden h-7 w-7 py-1 px-2 bg-transparent max-[899px]:flex items-center justify-center justify-self-end">
            <div className="h-6 w-6 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="p-6 bg-white">
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  )
}
