import CareScale from "./CareScale"
import "../css/PlantItem.css"

function PlantItem({ id, cover, name, water, light }) {

	return (
		<li key={id} className="plant-item" onClick={handleClick}>
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