import { FormEventHandler } from "react";
import "./FilterSelection.scss"

type FilterSelection = {
  handleFilter: FormEventHandler;
}

const FilterSelection = ({ handleFilter }: FilterSelection) => {
  return (
    <section className="filter-selection">
      <form onChange={handleFilter} className="filter-selection__filter-form" action="">
        <label htmlFor="high-abv">High ABV ( &gt; 6.0%)</label><input id="high-abv" type="checkbox" />
        <label htmlFor="acidic">Acidic</label><input id="acidic" type="checkbox" />
        <label htmlFor="dark-beer">Dark Beer ( &gt; 25 EBC )</label><input id="dark-beer" type="checkbox" />
        <label htmlFor="light-beer">Light Beer ( &lt;= 25 EBC )</label><input id="light-beer" type="checkbox" />
      </form>
    </section>
  )
}

export default FilterSelection
