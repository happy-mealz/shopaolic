import React from 'react';
import './cart-dropdown.style.scss';
import CustomButton from '../custom-button/custom-button.component';



const cartDropdown = ()=>(
    <div className="cart-dropdown">
        <div className="cart-items">

        </div>
        <CustomButton >GO TO YOUR CART</CustomButton>
    </div>
);



export default cartDropdown;