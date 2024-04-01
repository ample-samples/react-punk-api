import BeerCard from "../BeerCard/BeerCard"
import beers from "../../data/beers"

const BeerDisplay = () => {
  return (
    <>
      {beers.map( beer => { 
				return <BeerCard beer={beer} />
			})  }
    </>
  )
}

export default BeerDisplay
