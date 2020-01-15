import React from 'react';
import './card-icon.style.scss';
import {ReactComponent as ShoppingCart} from '../../assets/shopping-bag.svg';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';

const CartIcon =({toggleCartHidden,itemCount})=>(
<div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingCart className='shopping-icon'></ShoppingCart>
    <span className="item-count">{itemCount}</span>
</div>
)

const mapDispatchtoProps=(dispatch)=>({
    toggleCartHidden:()=> dispatch(toggleCartHidden())
   });
 
const mapStateToProps=(state)=>({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps,mapDispatchtoProps)(CartIcon);
