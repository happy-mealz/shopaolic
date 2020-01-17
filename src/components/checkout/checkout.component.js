import React from 'react';

import './checkout.style.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartItemsTotal} from '../../redux/cart/cart.selector';
import CheckoutItem from '../checkout-item/checkout-item.component';


const checkoutPage =({cartItems,cartTotalPrice})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Item</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem)=>
            (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
            )
        }
        <div className="total">
    <span>TOTAL: {cartTotalPrice}</span>
        </div>
            
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    cartTotalPrice:selectCartItemsTotal
})

export default connect(mapStateToProps)(checkoutPage);