import { Beer } from "../../types/types"
import "./BeerCard.scss"

type BeerCardProps = {
	beer: Beer
}

const formatDescription = (beerDescription: string): string => {
	const maxLength = 200
	return beerDescription.length > maxLength ? beerDescription.substring(0, maxLength) + "..." : beerDescription
}

const BeerCard = ({ beer }:BeerCardProps) => {
  return (
    <div className="beer">
			<img className="beer__image" src={beer.image_url} alt="" />
			<h3 className="beer__name">{ beer.name }</h3>
			<p className="beer__description">{ beer.tagline }</p>
			<p className="beer__info"><strong>ABV:</strong> { beer.abv }%</p>
			{
				<p className="beer__info"></p>
			}
			<p className="beer__info"><strong>Acidity: </strong>{ beer.ph }ph</p>
		</div>
  )
}

export default BeerCard
