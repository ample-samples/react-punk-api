import BeerCard from "../BeerCard/BeerCard"
import beers from "../../data/beers"
import "./BeerDisplay.scss"

const BeerDisplay = () => {
  return (
      <section className="beer-display">
        {beers.map(beer => {
          return <BeerCard beer={beer} />
        })}
      </section>
  )
}

export default BeerDisplay
