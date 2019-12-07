import React from 'react';
// import classes from './left.module.css';
import TextField from '@material-ui/core/TextField';
import Wrap from '../../../Hoc/Wrap';
const inputUserName = (props) => {
    // console.log(props.allowed);

    return(
    
    <Wrap className={props.className}>
         
        <TextField 
        required
        label={props.Label}
        margin="normal"
        error={props.allowed.loginCheck}
        onChange={(event) => 
            {    
                //  console.log("update");
                 props.inputUserName(event);
                 
            }}
        onKeyPress={props.onKeyPress}       
        />
    
    </Wrap>);
    
        };

export default inputUserName;

