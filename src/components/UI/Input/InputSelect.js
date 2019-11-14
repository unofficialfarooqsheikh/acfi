import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';






const InputSelect =(props) =>{
    const [age, setAge] = React.useState('');
    const handleChange = event => {
        setAge(event.target.value);
      };
    return(
        <div >
             
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          margin='dense' 
          variant='outlined'
          defaultValue='Type'
          label="Great"
          displayEmpty
        >  
          <MenuItem value="" default disabled> <em>Select &nbsp; </em></MenuItem> 
          <MenuItem value={1}>Employee Id &nbsp;</MenuItem>
          <MenuItem value={2}>Employee Name &nbsp;</MenuItem>
        </Select>
      </div>
    );
}
export default InputSelect;