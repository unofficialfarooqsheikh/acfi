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

               
                <Left classes={classes}
                psdshow={props.psdshow} 
                click={props.click} 
                inputUserName={props.inputUserName} 
                inputPassword={props.inputPassword}
                submitLogin={props.submitLogin}
                un={props.un}
                />
                <Right classes={classes}/>
            </div> 

      </div>

    );
};

    
           


    
export default Login;