import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const inputPassword= (props) => {

    
      
    
    
  return (
      
        <div>
            <FormControl >
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={props.pass? 'text' : 'password'}
                    // value={values.password}
                    // onChange={handleChange('password')}
                    onChange={(event) => 
                        {    
                            //  console.log("update");
                             props.inputPassword(event);
                             
                        }}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={props.click}
                        // onMouseDown={handleMouseDownPassword}
                        >
                        {props.pass  ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
        </div>

  )
 };

 export default inputPassword