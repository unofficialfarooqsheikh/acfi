import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const inputPassword= (props) => {

    
      
    
    
  return (
      
        <div>
            <FormControl >
                <InputLabel htmlFor="standard-adornment-password">{props.Password}</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={props.psdshow ? 'text' : 'password'}
                    // value={values.password}
                    // onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={props.click}
                        // onMouseDown={handleMouseDownPassword}
                        >
                        {props.psdshow  ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
        </div>

  )
 };

 export default inputPassword