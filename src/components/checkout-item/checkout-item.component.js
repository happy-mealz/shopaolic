import React from 'react';
import './checkout-item.style.scss';
import {connect} from 'react-redux';
import {clearItemFromCart, removeItemFromCart,addItem} from '../../redux/cart/cart.action';

const checkoutItem = ({cartItem, clearItem, removeItem,addItem})=>{
    const {name, imageUrl, price, quantity} = cartItem;
    return (
<div className="checkout-item">
    <div class="image-container">
        <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
        <div class="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
        <div class="value">{quantity}</div>
        <div class="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
        </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</div>

</div>
)}

const mapDispatchToProps=(dispatch)=>({
    clearItem: cartItem=> dispatch(clearItemFromCart(cartItem)),
    removeItem: cartItem=>dispatch(removeItemFromCart(cartItem)),
    addItem: cartItem=>dispatch(addItem(cartItem))

})

export default connect(null,mapDispatchToProps)(checkoutItem);