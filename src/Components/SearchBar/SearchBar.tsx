import { ChangeEvent } from "react"

type SearchBarProps = {
	handleSearch: (event: ChangeEvent) => void
}

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  return (
		<input onChange={handleSearch} type="text" />
  )
}

export default SearchBar
