import { Beer } from "../../types/types"
import "./BeerCard.scss"
import { isClassic } from "../../utilities/utilities"

type BeerCardProps = {
  beer: Beer
}

const formatDescription = (beerDescription: string): string => {
  const maxLength = 200
  return beerDescription.length > maxLength ? beerDescription.substring(0, maxLength) + "..." : beerDescription
}

const BeerCard = ({ beer }: BeerCardProps) => {
  return (
    <div className="beer">
      <img className="beer__image" src={beer.image_url} alt="" />
      <div className="beer__content">
        <h3 className="beer__name">{beer.name}</h3>
        <p className="beer__description">{beer.tagline}</p>
	<div className="beer__empty-separator"></div>
        <p className="beer__info"><strong>ABV:</strong> {beer.abv}%</p>
        <p className="beer__info"><strong>Acidity: </strong>{beer.ph}ph</p>
        {isClassic(beer.first_brewed) && <p className="beer__info"><strong>Classic</strong></p>}
      </div>
    </div>
  )
}

export default BeerCard
