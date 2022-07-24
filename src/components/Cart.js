import { useState, useEffect } from 'react';
import '../css/Cart.css';

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true);
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	);
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total]);

	return isOpen ? (
		<div className='cart'>
			<button
				className='cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Basket</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Empty the basket</button>
				</div>
			) : (
				<div>Your basket is empty</div>
			)}
		</div>
	) : (
		<div className='cart-closed'>
			<button
				className='cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Open the basket
			</button>
		</div>
	)
}

export default Cart