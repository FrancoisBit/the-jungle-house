import CareScale from "./CareScale"
import "../css/PlantItem.css"

function PlantItem({ id, cover, name, water, light, price }) {

	return (
		<li className="plant-item" onClick={handleClick}>
			<span className='plant-item-price'>{price}€</span>
			<img className="plant-item-cover" src={cover} alt={"${name} cover"} />
			{name}
			<div>
				<CareScale careType="water" scaleValue={water} />
				<CareScale careType="light" scaleValue={light} />
			</div>
		</li>
	)
}

function handleClick() {
    console.log('✨ Ceci est un clic ✨')
}

export default PlantItem