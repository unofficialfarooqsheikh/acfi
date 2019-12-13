import React from 'react';
import classes from './InputToggle.module.css'


const InputToggle =(props)=>{
    // const check=props.checked;//
    // const value = (check)?1:0;
    // console.log("check",check);
    // console.log("props",props)
  return (
   <div>
      <div className={classes.toggle}>
        <input  type='checkbox'
        className={classes.check} 
        id={props.id} 
        checked={props.checkedState} 
        onChange={props.change} disabled={props.disabled}/>
        <b className={[classes.b,classes.switch].join(" ")}></b>
        <b className={[classes.b,classes.track].join(" ")}></b>
      </div>
        <label style={{display:'inline'}} htmlFor={props.id}>{props.label}</label>
   </div>

  );
}


export default InputToggle;