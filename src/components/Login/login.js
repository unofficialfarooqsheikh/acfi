import React from 'react';
import classes from './login.module.css';
import Grid from '@material-ui/core/Grid';
import Left from './Left/left';
import Right from './Right/Right';
import { useMediaQuery } from "@material-ui/core";


const Login = (props) => {
    const matches = useMediaQuery('(min-width:600px)')
    return(
        
        <div>

            {matches && <Grid container direction="row" justify="center" alignItems="stretch" className={classes.Login}>

               <Grid item xs={4} zeroMinWidth className={classes.LoginDivsLeft}>
                <Left psdshow={props.psdshow} 
                click={props.click} 
                inputUserName={props.inputUserName} 
                inputPassword={props.inputPassword}
                submitLogin={props.submitLogin}
                />
                
            </Grid>
            
            <Grid item xs={8} zeroMinWidth className={classes.LoginDivsRight}>
                <Right/>
            </Grid>
            </Grid> 
            }

            {!matches && <Grid container  justify="center" alignitems="center" className={classes.Login}>
            <Grid item xs={12} sm={6}zeroMinWidth className={classes.Logindivs}>
                <Right/>
            </Grid>   
            <Grid item xs={12} sm={6} zeroMinWidth className={classes.Logindivs}>
                <Left psdshow={props.psdshow} click={props.click} />
            </Grid>
            
            </Grid>
        }
            

      </div>

    );
};

    
           


    
export default Login;