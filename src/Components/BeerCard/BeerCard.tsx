import { Beer } from "../../types/types"
import "./BeerCard.scss"
import { isClassic } from "../../utilities/utilities"

type BeerCardProps = {
  beer: Beer
}

const BeerCard = ({ beer }: BeerCardProps) => {
	const {image_url, name, tagline, first_brewed, abv, ph} = beer;
  return (
    <div  className="beer">
      <img className="beer__image" src={image_url ?? ""} alt="" />
      <div className="beer__content">
        <h3 className="beer__name">{name}</h3>
        <p className="beer__tagline">{tagline}</p>
	<div className="beer__empty-separator"></div>
        <p className="beer__info"><strong>ABV:</strong> {abv}%</p>
        <p className="beer__info"><strong>Acidity: </strong>{ph}ph</p>
        {isClassic(first_brewed ?? "9999") && <p className="beer__info"><strong>Classic 🍻</strong></p>}
      </div>
    </div>
  )
}

export default BeerCard
