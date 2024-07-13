import { useCartActions } from '@/store'
import { Button } from '../ui/form/button'

type ShowCartButtonProps = {
  onClick?: () => void
  label?: string | null
}

export function ShowCartButton({ label = null, onClick }: ShowCartButtonProps) {
  const { totalInCart } = useCartActions()

  const totalInCartNumber = Number(totalInCart()) // Converta para número

  const renderTotal = totalInCartNumber >= 1 ? totalInCartNumber : 0
  const phraseToButton =
    totalInCartNumber <= 1
      ? `Your basket • ${renderTotal} item`
      : `Your basket • ${renderTotal} items`

  return (
    <>
      {totalInCart() >= 1 && (
        <div className="hidden fixed bottom-0 left-0 right-0 z-40 max-[899px]:flex w-full h-20 items-center backdrop-blur-sm bg-white/30 px-6 pt-2">
          <Button title={label ?? `${phraseToButton}`} onClick={onClick} />
        </div>
      )}
    </>
  )
}
