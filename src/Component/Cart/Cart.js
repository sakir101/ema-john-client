import React from 'react';
import './Cart.css'
const Cart = ({cart, clearCart, children}) => {
    let total = 0;
    let charge =0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        charge = charge + product.shipping
        
    }
    const tax =parseFloat ((total * 0.1).toFixed(2));
    const gTotal = total + charge + tax;
    return (
        <div className='cart-info'>
            <h2>Order Summary</h2>
            <br />
            <br />
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${charge}</p>
            <p>Tax: ${tax}</p>
            <p><strong>Grand Total: ${gTotal}</strong></p>
            <button onClick={clearCart}>Clear All</button>
            {children}
        </div>
    );
};

export default Cart;