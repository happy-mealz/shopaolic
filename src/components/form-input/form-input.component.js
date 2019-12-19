import React from 'react';
import './form-input.style.scss';

const FormInput=({changeHandler, label,...otherformprops})=>(
    <div className="group">
        <input className="form-input" onChange={changeHandler} {...otherformprops} />
        {
            label?
            (
            <label
            className={ `${otherformprops.value.length ? "shrink":"" } form-input-label` }>{label}</label>
            )
            : null
        }
    </div>
)

export default FormInput;