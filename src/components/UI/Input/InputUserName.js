import React from 'react';
// import classes from './left.module.css';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Wrap from '../../../Hoc/Wrap';


const inputUserName = (props) => (

    <Wrap>
         
                        <TextField 
                        required
                        style={{width :200,}}
                        label={props.Label}
                        margin="normal"
                        error={props.loginAllowed}
                        />
                    
    </Wrap>
);

export default inputUserName;

