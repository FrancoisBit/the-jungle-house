import { useState, useEffect } from "react";

import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from './Footer';

import '../css/Layout.css';

function App() {
	const savedCart = localStorage.getItem('cart');
	const [cart, updateCart] = useState(savedCart != 0 ? JSON.parse(savedCart) : []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

    return (
		<div>
			<Banner/>
			<div className="layout-inner">
				<Cart cart={cart} updateCart={updateCart}/>
                <ShoppingList cart={cart} updateCart={updateCart}/>
			</div>
			<Footer/>
		</div>
    )
}

export default App
