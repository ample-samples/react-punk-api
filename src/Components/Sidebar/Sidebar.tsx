import SearchBar from "../SearchBar/SearchBar"
import FilterSelection from "../FilterSelection/FilterSelection"
import { ChangeEvent, FormEventHandler } from "react"

type SideBarProps = {
  handleFilter: FormEventHandler;
  handleSearch: (event: ChangeEvent) => void
}

const Sidebar = ({ handleSearch, handleFilter }: SideBarProps) => {
  return (
    <section className="sidebar">
      <SearchBar handleSearch={handleSearch} />
      <FilterSelection handleFilter={handleFilter} />
    </section>
  )
}

export default Sidebar
