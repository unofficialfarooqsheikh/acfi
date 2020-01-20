import React from 'react';
import classes from './Loading.module.css'
const Loading=() =>{
    return(
    <div className={classes.spinnerContainer}>
        <div className={classes.ldsSpinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <p>Loading</p>
    </div>
    )
}
export default Loading