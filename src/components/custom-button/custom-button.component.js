import React from 'react';
import './custom-button.style.scss';

const CustomButton =({children,isGoogle,inverted, ...otherButtonProps})=>(
   <button className={`${inverted?'inverted':''} ${isGoogle?'google-sign-in':''} custom-button`} {...otherButtonProps}>
       {children}
   </button>
    
)

export default CustomButton;