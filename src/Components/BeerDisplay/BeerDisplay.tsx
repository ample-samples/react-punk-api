import BeerCard from "../BeerCard/BeerCard"
import beers from "../../data/data_formatted"
import "./BeerDisplay.scss"

const BeerDisplay = () => {
  return (
      <section className="beer-display">
        {beers.map((beer, index) => {
          return <BeerCard beer={beer} key={index} />
        })}
      </section>
  )
}

export default BeerDisplay
