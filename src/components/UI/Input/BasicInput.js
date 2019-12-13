import React from 'react'
    const BasicInput=(props)=>{
    return(
    <div >
        <label htmlFor={props.label}>{props.label}</label>
        <input id={props.label} type={props.type} value={props.value} 
                            onChange={props.change} 
                            />
        </div>
    )
    }


export default BasicInput;