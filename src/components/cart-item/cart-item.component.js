import React from 'react';
import './cart-item.style.scss';

const CartItem =({item:{imageUrl, price, quantity, name}})=>(
    <div className="cart-item">
        <img src={imageUrl} atl='item'/>
        <div class="item-details">
            <span class="name">{name}</span>
            <span class="price">{quantity} x Rs.{price}</span>
        </div>
    </div>
);

export default CartItem;