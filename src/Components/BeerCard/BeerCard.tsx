import { Beer } from "../../types/types"
import "./BeerCard.scss"

type BeerCardProps = {
	beer: Beer
}

const BeerCard = ({ beer }:BeerCardProps) => {
  return (
    <div className="beer">
			<img className="beer__image" src={beer.image_url} alt="" />
			<h3 className="beer__name">{ beer.name }</h3>
		</div>
  )
}

export default BeerCard
