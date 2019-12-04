import React from 'react';


const InputSwitch = (props) => {

   return(
   <div >
    <input type='checkbox'
                                id={props.id}
                                onChange={props.change} 
                                checked={props.checkedState}  
                                />
<label htmlFor={props.id}>{props.label}</label>
    </div>);
}
export default InputSwitch;