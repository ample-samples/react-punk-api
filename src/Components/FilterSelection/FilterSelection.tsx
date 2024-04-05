import { FormEventHandler } from "react";
import "./FilterSelection.scss"
import { FilterType } from "../../App";

type FilterSelection = {
  handleFilter: FormEventHandler;
  filter: FilterType;
}

const FilterSelection = ({ handleFilter, filter }: FilterSelection) => {
  return (
    <section className="filter-selection">
      <form onChange={handleFilter} className="filter-selection__filter-form" action="">
        <label htmlFor="high-abv">High ABV ( &gt; 6.0%)</label><input checked={filter["high-abv"]} id="high-abv" type="checkbox" />
        <label htmlFor="acidic">Acidic ( &lt; 4 ph)</label><input checked={filter["acidic"]} id="acidic" type="checkbox" />
        <label htmlFor="classic-range">Classic Range</label><input checked={filter["classic-range"]} id="classic-range" type="checkbox" />
        <label htmlFor="dark-beer">Dark Beer ( &gt; 25 EBC )</label><input checked={filter["dark-beer"]} id="dark-beer" type="checkbox" />
        <label htmlFor="light-beer">Light Beer ( &lt;= 25 EBC )</label><input checked={filter["light-beer"]} id="light-beer" type="checkbox" />
      </form>
    </section>
  )
}

export default FilterSelection
