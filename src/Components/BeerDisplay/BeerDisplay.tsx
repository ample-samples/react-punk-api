import BeerCard from "../BeerCard/BeerCard"
import beers from "../../data/beers"
import "./BeerDisplay.scss"

type BeerDisplayProps = {
	filter: unknown;
	searchTerm: string;
}

const BeerDisplay = ({ filter, searchTerm }: BeerDisplayProps) => {
  return (
      <section className="beer-display">
        {beers.map((beer, index) => {
          return <BeerCard beer={beer} key={index} />
        })}
      </section>
  )
}

export default BeerDisplay
