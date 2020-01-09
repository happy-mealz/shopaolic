import React from 'react';
import './cart-dropdown.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {connect} from 'react-redux';



const cartDropdown = ({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem}/>))
            }
        </div>
        <CustomButton >GO TO YOUR CART</CustomButton>
    </div>
);

const mapStateToProps=({cart:{cartItems}})=>({
    cartItems
});

export default connect(mapStateToProps)(cartDropdown);