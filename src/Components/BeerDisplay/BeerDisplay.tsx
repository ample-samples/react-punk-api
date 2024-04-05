import BeerCard from "../BeerCard/BeerCard"
import beers from "../../data/beers"
import "./BeerDisplay.scss"
import { Beer } from "../../types/types"
import { isClassic } from "../../utilities/utilities"

type Filter = { [key: string]: boolean }

type BeerDisplayProps = {
  filter: Filter;
  searchTerm: string;
}

const filterMatchesName = (searchItem: string | null, userSearch: string) => {
  if (searchItem === null) return false
  if (userSearch === '') {
    return true
  } else if (searchItem.toLowerCase().includes(userSearch.toLowerCase())) {
    return true
  }
  return false
}

const beerMatchesFilter = ({ abv, ph, ebc, first_brewed, name }: Beer, userFilter: Filter) => {
  if (!abv || !ph || !ebc || !first_brewed || !name) return false
  if (userFilter["high-abv"] && (abv < 6)) return false
  if (userFilter["acidic"] && (ph >= 4)) return false
  if (userFilter["classic-range"] && !isClassic(first_brewed)) return false
  if (userFilter["dark-beer"] && (ebc <= 25)) return false
  if (userFilter["light-beer"] && (ebc > 25)) return false
  return true
}

const BeerDisplay = ({ filter, searchTerm }: BeerDisplayProps) => {

  return (
    <section data-testid="beer-display" className="beer-display">
      {beers.map((beer, index) => {
        if (!filterMatchesName(beer.name, searchTerm)) return
        if (!beerMatchesFilter(beer, filter)) return
        return <BeerCard beer={beer} key={index} />
      })}
    </section>
  )
}

export default BeerDisplay
