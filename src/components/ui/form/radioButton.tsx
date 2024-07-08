import { ModifierItem } from '@/domain'

type RadioButtonProps = {
  value: ModifierItem
  label: string
  name: string
  valueSelected: ModifierItem | null
  onChange: (value: string) => void
}

export function RadioButton({
  value,
  label,
  name,
  valueSelected,
  onChange
}: RadioButtonProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value)
  }

  return (
    <div className="flex ga-2 items-center justify-between">
      <div className="flex flex-col mt-1 w-full">
        <label htmlFor={name + value} className="font-medium block w-full">
          {label}
        </label>
        <span className="text-base text-[#464646]">{value.price}</span>
      </div>
      <input
        type="radio"
        id={name + value}
        name={name + JSON.stringify(value)}
        value={JSON.stringify(value)}
        checked={JSON.stringify(valueSelected) === JSON.stringify(value)}
        onChange={handleChange}
        className="w-5 h-5"
      />
    </div>
  )
}
