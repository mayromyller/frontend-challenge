import { SearchIcon } from '../../icons/searchIcon'

type SearchInputProps = {
  onSearch: (term: string) => void
}

export function SearchInput({ onSearch }: SearchInputProps) {
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const term = event.target.value

    onSearch(term)
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none h-[44px] w-[48px]">
        <SearchIcon />
      </div>
      <input
        id="default-search"
        className="block w-full h-[44px] ps-[48px] text-gray-900 bg-white border border-[#8A94A4] rounded-lg focus:outline-none focus:ring-[1px] focus:ring-offset-0 focus:ring-[#8A94A4] font-[#2C2C2C]"
        placeholder="Search menu items"
        onChange={handleSearch}
      />
    </div>
  )
}
