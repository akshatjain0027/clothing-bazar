import React from 'react'
import './form-input.styles.css'

const FormInput = ({handleChange, label, ...otherprops}) => (
    <div className='group'>
        <label className='form-input-label'>{label}</label>
        <br/>
        <input className='form-input' onChange={handleChange} {...otherprops}/>
        
    </div>
)

export default FormInput