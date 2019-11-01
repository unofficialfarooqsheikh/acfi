import React from 'react';
// import classes from './left.module.css';
import Wrap from '../../../Hoc/Wrap';
import Logo from '../../UI/logo';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputPassword from '../../UI/Input/InputPassword';
import InputUserName from '../../UI/Input/InputUserName';

const left = (props) => (

               <Wrap>
                    <Logo />
                    <h1>AcFi</h1>
                    <p>smarter way to do things</p>
                    <InputUserName Label="User Name"/>
                    <InputPassword Password="Password" pass={props.psdshow} click={props.click} />
               </Wrap>
);
    
export default left;