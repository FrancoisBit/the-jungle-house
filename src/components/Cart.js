import { useState } from 'react'

import "../css/Cart.css"

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false)

    const monsteraPrice = 8

    return isOpen ? (
        <div className='cart'>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            <h3>Total : {monsteraPrice * cart}€</h3>
            <button onClick={() => updateCart(0)}>Vider le panier</button>
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    );
}

export default Cart;