import BeerCard from "../BeerCard/BeerCard"
import beers from "../../data/beers"
import "./BeerDisplay.scss"
import { Beer } from "../../types/types"

type Filter = { [key: string]: boolean }

type BeerDisplayProps = {
  filter: Filter;
  searchTerm: string;
}

const filterMatchesName = (searchItem: string, userSearch: string) => {
  if (userSearch === '') {
    return true
  } else if (searchItem.toLowerCase().includes(userSearch.toLowerCase())) {
    return true
  }
  return false
}


const BeerDisplay = ({ filter, searchTerm }: BeerDisplayProps) => {

  const beerMatchesFilter = ( {abv, ph, ebc, first_brewed}: Beer, filterState: Filter ) => {
    if (filterState["high-abv"] && (abv < 6)) return true
    if (filterState["acidic"] && (ph >= 4)) return true
    // if (filterState["classic-range"]){}
    if (filterState["dark-beer"] && (ebc < 25)) return true
    if (filterState["light-beer"] && (ebc >= 25)) return true
    return false
  }

  return (
    <section className="beer-display">
      {beers.map((beer, index) => {
        if (!filterMatchesName(beer.name, searchTerm)) return
        if (!beerMatchesFilter(beer, filter))
        return <BeerCard beer={beer} key={index} />
      })}
    </section>
  )
}

export default BeerDisplay
