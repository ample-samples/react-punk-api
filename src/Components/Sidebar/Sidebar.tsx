import SearchBar from "../SearchBar/SearchBar"
import FilterSelection from "../FilterSelection/FilterSelection"
import { ChangeEvent } from "react"

type SideBarProps = {
	handleFilter: (event: ChangeEvent) => void,
	handleSearch: (event: ChangeEvent) => void
}

const Sidebar = ({handleSearch, handleFilter}:SideBarProps) => {
  return (
    <section className="sidebar">
      <SearchBar handleSearch={handleSearch} />
      <FilterSelection handleFilter={handleFilter} />
    </section>
  )
}

export default Sidebar
