import React from 'react';
import './custom-button.style.scss';

const CustomButton =({children,isGoogle, ...otherButtonProps})=>(
   <button className={`${isGoogle?'google-sign-in':''} custom-button`} {...otherButtonProps}>
       {children}
   </button>
    
)

export default CustomButton;