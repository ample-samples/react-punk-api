import { ChangeEvent } from "react"
import "./Searchbar.scss"

type SearchBarProps = {
  handleSearch: (event: ChangeEvent) => void
}

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  return (
    <input placeholder="Search.." className="search-bar" onChange={handleSearch} type="text" />
  )
}

export default SearchBar
