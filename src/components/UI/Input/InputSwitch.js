import React from 'react';
import classes from './Input.module.css';


const InputSwitch=() => {

   return(<div >
    <input className={classes.switch} type='checkbox' defaultChecked/>
    <label>Arrears</label>
    </div>);
}
export default InputSwitch;