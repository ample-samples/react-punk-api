import SearchBar from "../SearchBar/SearchBar"
import FilterSelection from "../FilterSelection/FilterSelection"
import { ChangeEvent, FormEventHandler } from "react"
import "./Sidebar.scss"

type SideBarProps = {
  handleFilter: FormEventHandler;
  handleSearch: (event: ChangeEvent) => void
}

const Sidebar = ({ handleSearch, handleFilter }: SideBarProps) => {
  return (
    <section className="sidebar">
      <div className="sidebar__logo">
        <img src="https://icons.iconarchive.com/icons/iconarchive/fat-sugar-food/256/Drink-Beer-icon.png" alt="" />
	<p>Beer Buddy</p>
      </div>
      <SearchBar handleSearch={handleSearch} />
      <FilterSelection handleFilter={handleFilter} />
    </section>
  )
}

export default Sidebar
