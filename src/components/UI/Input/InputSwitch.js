import React from 'react';
import classes from './InputSwitch.module.css';

const InputSwitch = (props) => {
    // console.log(props)
   return(
   <div className={classes.InputSwitch}>
    <input type='checkbox' 
                                id={props.id}
                                onChange={props.change} 
                                checked={props.checkedState}  
                                />
    <label style={props.style} htmlFor={props.id}>{props.label}</label>
    </div>);
}
export default InputSwitch;