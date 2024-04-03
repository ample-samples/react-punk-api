import BeerCard from "../BeerCard/BeerCard"
import beers from "../../data/beers"
import "./BeerDisplay.scss"

type BeerDisplayProps = {
	filter: unknown;
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
  return (
      <section className="beer-display">
        {beers.map((beer, index) => {
        if (!filterMatchesName(beer.name, searchTerm)) return
          return <BeerCard beer={beer} key={index} />
        })}
      </section>
  )
}

export default BeerDisplay
