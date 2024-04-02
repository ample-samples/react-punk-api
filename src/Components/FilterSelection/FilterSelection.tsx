import { ChangeEvent } from "react";
import "./FilterSelection.scss"

type FilterSelection = {
	handleFilter: (event: ChangeEvent) => void;
}

const FilterSelection = ({ handleFilter }: FilterSelection) => {
  return (
		<section className="filter-selection">
			<form className="filter-selection__filter-form" action="">
				<label htmlFor="high-abv">High ABV ( &gt; 6.0%)</label><input id="high-abv" type="checkbox" />
				<label htmlFor="classic-range">Classic Range</label><input id="classic-range" type="checkbox" />
				<label htmlFor="acidic">Acidic</label><input id="acidic" type="checkbox" />
			</form>
		</section>
  )
}

export default FilterSelection
