import React from 'react';

import './checkout.style.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartItemsTotal} from '../../redux/cart/cart.selector';

const checkoutPage =({cartItems,cartTotalPrice})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>1</span>
            </div>
            <div className="header-block">
                <span>2</span>
            </div>
            <div className="header-block">
                <span>3</span>
            </div>
            <div className="header-block">
                <span>4</span>
            </div>
        </div>
        {
            cartItems.map((cartItem)=>
            (
                cartItem.name
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
    cartTotalPrice: selectCartItemsTotal
})

export default connect(mapStateToProps)(checkoutPage);