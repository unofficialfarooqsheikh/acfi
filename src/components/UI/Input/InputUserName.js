import React from 'react';
// import classes from './left.module.css';
import TextField from '@material-ui/core/TextField';
import Wrap from '../../../Hoc/Wrap';
const inputUserName = (props) => (

    <Wrap>
         
                        <TextField 
                        required
                        label={props.Label}
                        margin="normal"
                        error={props.loginAllowed}
                        onChange={(event) => 
                            {    
                                //  console.log("update");
                                 props.inputUserName(event);
                                 
                            }}

                        />
                    
    </Wrap>
);

export default inputUserName;

