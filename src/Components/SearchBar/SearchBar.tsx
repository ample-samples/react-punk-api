import { ChangeEvent } from "react"

type SearchBarProps = {
	handleSearch: (event: ChangeEvent) => void
}

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  return (
		<input type="text" />
  )
}

export default SearchBar
