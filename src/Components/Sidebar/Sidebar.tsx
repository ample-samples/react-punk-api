import SearchBar from "../SearchBar/SearchBar"
import FilterSelection from "../FilterSelection/FilterSelection"
import { ChangeEvent, FormEventHandler, useState } from "react"
import { FilterType } from "../../App"
import "./Sidebar.scss"

type SideBarProps = {
  handleFilter: FormEventHandler;
  handleSearch: (event: ChangeEvent) => void;
  filter: FilterType;
  search: string;
}

const Sidebar = ({search, filter, handleSearch, handleFilter }: SideBarProps) => {
  const [sidebarIsHidden, setSidebarIsHidden] = useState(true)

  const handleClick = () => {
    setSidebarIsHidden(() => !sidebarIsHidden)
  }

  return (
    <>
      <div className="sidebar-toggle">
        <img  onClick={handleClick} src="https://www.svgrepo.com/show/506800/burger-menu.svg" alt="" />
	{ !sidebarIsHidden &&
	  <section data-testid="sidebar-small" className="sidebar-small">
	    <div className="sidebar__logo">
	      <img src="https://icons.iconarchive.com/icons/iconarchive/fat-sugar-food/256/Drink-Beer-icon.png" alt="" />
	      <p>Beer Buddy</p>
	    </div>
	    <SearchBar search={search} key={"search"} handleSearch={handleSearch} />
	    <FilterSelection filter={filter} handleFilter={handleFilter} />
	  </section>
	}
      </div>
      <section data-testid="sidebar" className="sidebar">
        <div className="sidebar__logo">
          <img src="https://icons.iconarchive.com/icons/iconarchive/fat-sugar-food/256/Drink-Beer-icon.png" alt="" />
          <p>Beer Buddy</p>
        </div>
        <SearchBar search={search} handleSearch={handleSearch} />
        <FilterSelection filter={filter} handleFilter={handleFilter} />
      </section>
    </>
  )
}

export default Sidebar
