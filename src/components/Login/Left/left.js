import React from 'react';
import classes from '../login.module.css';
import Wrap from '../../../Hoc/Wrap';
import Logo from '../../UI/logo';
import InputPassword from '../../UI/Input/InputPassword';
import InputUserName from '../../UI/Input/InputUserName';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const left = (props) => {
     const ex = "Think smart!";
     
     return(
     <Wrap >
     <div className={classes.left}>
               <Logo />
               <h1 ><span>A</span>c<span>F</span>i</h1>
               <p className={classes.sub}>{ex}</p>
     
               <div className={classes}>
                    <InputUserName className={classes.field}Label="User Name" inputUserName={props.inputUserName}/>
                    <InputPassword className={classes.field}Label="Password" pass={props.psdshow} click={props.click} inputPassword={props.inputPassword}/>
               </div>
               <br/>
               <Link to={"/mainPage/"+ props.un}><Button variant="secondary" type="submit" value="Submit" onClick={props.submitLogin} style={{
               margin: '10px'
               }} >Submit</Button></Link>
               <Button variant="light" style={{
               margin: '10px'
               }}>Forgot Password</Button>
     </div>
     </Wrap>)
};
    
export default left;