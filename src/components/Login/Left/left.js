import React from 'react';
// import classes from '../login.module.css';
import Wrap from '../../../Hoc/Wrap';
import InputPassword from '../../UI/Input/InputPassword';
import InputUserName from '../../UI/Input/InputUserName';
import Button from 'react-bootstrap/Button';


const left = (props) => {
     const ex = "Think smart!";
     // console.log("Left.js"+props);
     // const AlertUserNotLoggedIn = (sessionStorage.getItem('Token'))?null:(<p >You Are Not Logged in</p>);
     return(
          <Wrap className={props.classes.left}>
               <h1 ><span>A</span>c<span>F</span>i</h1>
               <p >{ex}</p>
     
               <div >
                    <InputUserName Label="User Name" inputUserName={props.inputUserName} allowed={props.un} onKeyPress={props.onKeyPress}/>
                    <InputPassword Label="Password" pass={props.psdshow} click={props.click} inputPassword={props.inputPassword} allowed={props.un} onKeyPress={props.onKeyPress}/>
               </div>
               <br/>
               <Button variant="secondary" type="submit" value="Submit" onClick={props.submitLogin} onKeyPress={(e)=>{e.preventDefault()}} style={{
                    margin: '10px'
               }} >Submit</Button>
               <Button variant="light" style={{
                    margin: '10px'
               }}>Forgot Password</Button>
               {/* {AlertUserNotLoggedIn} */}
     </Wrap>
     )
};
    
export default left;