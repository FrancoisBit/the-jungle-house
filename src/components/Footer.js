import { useState } from "react";

import "../css/Footer.css";

function Footer() {
	const [inputValue, setInputValue] = useState("");

	function handleInput(e) {
		setInputValue(e.target.value);
	}

	function handleBlur() {
		if (!inputValue.includes("@")) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥");
		}
	}

	return (
		<footer className="footer">
			<div className="footer-elem">
				For the plants lovers 🌿🌱🌵
			</div>
			<div className="footer-elem">Enter your email here :</div>
			<input
				placeholder="Entrez votre mail"
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer