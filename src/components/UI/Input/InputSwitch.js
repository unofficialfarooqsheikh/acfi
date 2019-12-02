import React from 'react';


const InputSwitch = (props) => {
    
    console.log(props);
    console.log('sjdafgsgladfglsadfbi');
   return(
   <div >
    <input type='checkbox' 
                                id={props.id}
                                onChange={props.change} 
                                checked={props.checkedState}  
                                />
    <label htmlFor={props.id}>{""+props.checkedState}</label>
    </div>);
}
export default InputSwitch;