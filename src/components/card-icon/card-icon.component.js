import React from 'react';
import './card-icon.style.scss';
import {ReactComponent as ShoppingCart} from '../../assets/shopping-bag.svg';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';

const CartIcon =({toggleCartHidden})=>(
<div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingCart className='shopping-icon'></ShoppingCart>
    <span className="item-count">0</span>
</div>
)

const mapDispatchtoProps=(dispatch)=>({
    toggleCartHidden:()=> dispatch(toggleCartHidden())
   });

export default connect(null,mapDispatchtoProps)(CartIcon);
