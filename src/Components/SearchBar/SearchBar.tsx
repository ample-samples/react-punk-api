import { ChangeEvent } from "react"
import "./Searchbar.scss"

type SearchBarProps = {
  handleSearch: (event: ChangeEvent) => void;
  search: string;
}

const SearchBar = ({ handleSearch, search }: SearchBarProps) => {
  return (
    <input value={search} placeholder="Search.." className="search-bar" onChange={handleSearch} type="text" />
  )
}

export default SearchBar
