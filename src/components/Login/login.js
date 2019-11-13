import React from 'react';
import classes from './login.module.css';
import Left from './Left/left';
import Right from './Right/Right';
// import { useMediaQuery } from "@material-ui/core";


const Login = (props) => {
    console.log(props)
    return(
        
        <div>

            <div className={classes.Login}>

               <div className={classes.LoginDivsLeft}>
                <Left psdshow={props.psdshow} 
                click={props.click} 
                inputUserName={props.inputUserName} 
                inputPassword={props.inputPassword}
                submitLogin={props.submitLogin}
                un={props.un}
                />
                
            </div>
            
            <div  className={classes.LoginDivsRight}>
                <Right/>
            </div>
            </div> 

      </div>

    );
};

    
           


    
export default Login;