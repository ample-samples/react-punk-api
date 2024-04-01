import { Beer } from "../../types/types"

type BeerCardProps = {
	beer: Beer
}

const BeerCard = ({ beer }:BeerCardProps) => {
  return (
    <>{
			beer.name
		}</>
  )
}

export default BeerCard
